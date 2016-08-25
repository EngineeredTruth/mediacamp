import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import session from 'express-session';
import config from './config.js';
import passport from 'passport';
import massive from 'massive';
const YouTubeStrategy = require('passport-youtube-v3').Strategy;
const port = 3000;
const base = 'https://www.googleapis.com/youtube/v3'
const connectionString = 'postgres://tran@localhost/youtube';
const massiveInstance = massive.connectSync({
    connectionString: connectionString
});
import google from 'googleapis';
const youtube = google.youtubeAnalytics('v1');
const OAuth2 = google.auth.OAuth2;
const oauth2Client = new OAuth2(config.GOOGLE_CLIENT_ID, config.GOOGLE_CLIENT_SECRET, "http://localhost:3000/auth/callback");

const app = module.exports = express();

var http = require('http').Server(app);
var io = require('socket.io')(http);

app.use(session({
    secret: config.sessionSecret,
    saveUninitialized: false,
    resave: true
}));

app.use(passport.initialize());
app.use(passport.session());
app.use(bodyParser.json());
app.use(cors());
app.set('db', massiveInstance);
app.use(express.static(__dirname + '/public'));

const db = app.get('db');

const uCtrl = require('./uCtrl.js');

var users = [];

//Socket IO
io.on('connection', (socket) => {
    console.log('SOCKET INFORMATION: ', socket.conn.id);

  //receives message from client, contains username
    socket.on('masterCtrl to server', (msg) => {

//write a check here to ponly push name if it doesn't already exist.
for(let i = 0; i < users.length; i++){
  if(users[i].userName === msg.user){
    users.splice(i,1);
    i--;
  }
}
      users.push({userName: msg.user,
        userID: socket.conn.id,
        channelID: msg.channelid,
        thumbnailurl: msg.thumbnailurl
      });

      //sends msgs to all clients, contains username
      console.log('ALL USERS: ', users);
      console.log('MESSAGE PASSED INTO MASTERCTRL: ', msg);
        io.emit('server to masterCtrl', msg);

    });

//triggers when directive loads
    socket.on('chatList to server', () => {
        //Sends chatlist to cliet
        io.emit('server to chatList', users);
    });

    socket.on('disconnect', () => {
        for(let i = 0; i < users.length; i++){
          if(users[i].userID === socket.conn.id){
            users.splice(i,1);
            i--;
            console.log('LIST OF USERS', users);
          }
        }
        io.emit('server to chatList', users);
        console.log('SOCKET DISCONNECT: ', socket.conn.id);
    })


//change rooms
// socket.on('Change room to server', (roomObj) =>{
//   socket.leave('General Chat');
//   socket.join(roomObj.room);
//
//   console.log('Attempting to change room for: ', roomObj);
//
// //searches for for the user and changes user.room to the appropriate room.
//   for (let i = 0; i < users.length; i++) {
//
//     if(users[i].userName === roomObj.userName){
//       users[i].room = roomObj.room;
//       console.log('CHANGE ROOM TO: ', users[i].room);
//     }
//   }
// })
});


//YOUTUBE PASSPORT STUFF
passport.use(new YouTubeStrategy({
        clientID: config.GOOGLE_CLIENT_ID,
        clientSecret: config.GOOGLE_CLIENT_SECRET,
        callbackURL: "http://ec2-52-10-96-201.us-west-2.compute.amazonaws.com:9000/auth/callback",
        scope: ['https://www.googleapis.com/auth/youtube.readonly',
            'https://www.googleapis.com/auth/yt-analytics.readonly'
        ]
    },
    function(accessToken, refreshToken, profile, done) {

        oauth2Client.setCredentials({
            access_token: accessToken,
            refresh_token: refreshToken
        });

        let obj = {}
        obj.id = profile.id;
        obj.auth = oauth2Client;

        db.read_user([profile.id], (err, response) => {

            if (typeof response[0] === 'undefined') {
                db.create_user([profile.displayName, profile.id, refreshToken], function(err, response) {});

                db.read_id([profile.id], (err, res) => {
                    if (err) {
                        console.log(err);
                    } else {
                        let id = res[0].id;
                        console.log('id: ', id);
                        db.update_u_id_time_watched([id], (err, res) => {
                            if (err) {
                                console.log(err);
                            }
                        })
                        db.update_u_id_device_type([id], (err, res) => {
                            if (err) {
                                console.log(err);
                            }
                        })
                    }
                })

                return done(null, obj);
            } else {
                console.log('not a new user');
                return done(null, obj);
            }
        });
    }
));

//END POINTS
app.get('/auth/', passport.authenticate('youtube'));
app.get('/auth/callback', passport.authenticate('youtube', {
    failureRedirect: '/auth'
}), uCtrl.read_id, uCtrl.analysis, uCtrl.device, uCtrl.thumbnail);

app.get('/getAllData', uCtrl.read_user, uCtrl.read_watch_data, uCtrl.read_individual_watched,
  uCtrl.read_device_data, uCtrl.read_avg_device_data);

// serialize / deserialize for passport
// (only used with session, automatically set as next step from passport.use)

app.get('/login', (req, res, next) => {
    if (req.isAuthenticated()) {
        return res.redirect('/#/dashboard')
    }
    return res.redirect('/auth'); //redirects user to app.get('/login')
});

app.get('/logout', (req, res) => {
  req.session.destroy((e)=>{
    req.logout();
    res.redirect('/');
  })
})

passport.serializeUser((user, done) => {
    done(null, user); // put the whole user object from YouTube on the sesssion;
});

passport.deserializeUser((obj, done) => {
    //Only do something here that needs to be done with every request
    done(null, obj); // get data from session and put it on req.user in every endpoint;
});

http.listen(config.port, function() {
    console.log('Hosting port', port);
});
