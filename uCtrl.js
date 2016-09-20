import google from 'googleapis';
import http from 'http';
import request from 'request';

const youtube = google.youtubeAnalytics('v1');

var app = require('./server.js');
var db = app.get('db');

function formatDateString(date) {
    var yyyy = date.getFullYear().toString();
    var mm = padToTwoCharacters(date.getMonth() + 1);
    var dd = padToTwoCharacters(date.getDate());

    return yyyy + '-' + mm + '-' + dd;
}

function padToTwoCharacters(number) {
    if (number < 10) {
        return '0' + number;
    } else {
        return number.toString();
    }
}

var ONE_MONTH_IN_MILLISECONDS = 1000 * 60 * 60 * 24 * 30;

var today = new Date();
var lastMonth = new Date(today.getTime() - ONE_MONTH_IN_MILLISECONDS);
var lastYear = new Date(today.getTime() - (12 * ONE_MONTH_IN_MILLISECONDS));

today = formatDateString(today);
today = padToTwoCharacters(today);
lastMonth = formatDateString(lastMonth);
lastMonth = padToTwoCharacters(lastMonth);
lastYear = formatDateString(lastYear);
lastYear = padToTwoCharacters(lastYear);

module.exports = {
    analysis: (req, res, next) => {
        //assigns my auth credentials and channelID to a variable that's shorter
        const auth = req.user.auth;
        const channelID = req.user.id;
        const key = req.user.key;

        //creates a query parameter that google can read to grab my views, subscribersGained and subscribersLost for the past month
        const oneMonth = {
            auth: auth,
            ids: "channel==" + channelID,
            "start-date": lastMonth,
            "end-date": today,
            metrics: "views,subscribersGained,subscribersLost"
        }

        //creates a query parameter that gets my most viewed videos this past year
        const oneYearMostViewed = {
            auth: auth,
            ids: "channel==" + channelID,
            "start-date": lastYear,
            "end-date": today,
            metrics: "views",
            dimensions: 'video',
            sort: '-views',
            'max-results': 3
        }

        const oneYearMostShared = {
            auth: auth,
            ids: "channel==" + channelID,
            "start-date": lastYear,
            "end-date": today,
            metrics: "shares",
            dimensions: 'sharingService',
            sort: '-shares'
        }

        const oneYearAvgViewDuration = {
            auth: auth,
            ids: "channel==" + channelID,
            "start-date": lastYear,
            "end-date": today,
            metrics: "averageViewDuration"
        }

        //runs to 1st query param then stores the sub rate
        youtube.reports.query(oneMonth, (err, response) => {
            if (err) {
                console.log(err);
            }
            if (response.rows === undefined) {
                response.rows = ([
                    [null, null]
                ]);
            }

            const viewsPerMonth = response.rows[0][0]
            const subsPerMonth = response.rows[0][1] - response.rows[0][2];
            req.session.subsPerMonth = subsPerMonth;

            db.update_sub_rate([subsPerMonth, channelID], (err, response) => {});

        });

        //runs the 2nd query param then stores the video info
        youtube.reports.query(oneYearMostViewed, (err, response) => {
            if (err) {
                console.log(err);
            }
            if (response.rows === undefined) {
                response.rows = [
                    [null, null],
                    [null, null],
                    [null, null]
                ];
            }

            const [a, b] = response.rows[0];
            const [c, d] = response.rows[1];
            const [e, f] = response.rows[2];
            const videoIDs = [a, c, e];

            db.update_most_viewed_videos([a, b, c, d, e, f, channelID], (err, response) => {
                if (err) {
                    console.log(err);
                }
                for (let i = 0; i < videoIDs.length; i++) {
                    const videoInfo = 'https://www.googleapis.com/youtube/v3/videos?part=snippet&id=' + videoIDs[i] + '&key=AIzaSyDnGuZZAv1e1e4Oeb1ECeCxEV831HWtkIg';
                    request(videoInfo, function(error, response, body) {
                        let obj = JSON.parse(body);

                        if (obj.items.length === 0) {
                        } else {

                        const name = obj.items[0].snippet.localized.title
                        switch (i) {
                            case 0:
                                db.update_most_viewed_name1([name, channelID], (err, response) => {
                                    if (err) {
                                        console.log(err);
                                    }
                                });
                                break;
                            case 1:
                                db.update_most_viewed_name2([name, channelID], (err, response) => {
                                    if (err) {
                                        console.log(err);
                                    }
                                });
                                break;
                            case 2:
                                db.update_most_viewed_name3([name, channelID], (err, response) => {
                                    if (err) {
                                        console.log(err);
                                    }
                                });
                                break;
                        }
                        }


                    });
                }
            });
        });

        //Update most shared videos
        youtube.reports.query(oneYearMostShared, (err, response) => {
            if (err) {
                console.log(err);
            } else {

                if (response.rows !== undefined) {
                    for (var i = 0; i < response.rows.length; i++) {
                        var obj = {};
                        obj.id = key;
                        obj[response.rows[i][0].toLowerCase()] = response.rows[i][1];
                        db.users.update(obj, (err, res) => {
                            if (err) {
                                console.log(err);
                            }
                        });
                    }
                }
            }
        });

        const totalSubsUrl = 'https://www.googleapis.com/youtube/v3/channels?part=statistics&id=' + channelID + '&key=AIzaSyDnGuZZAv1e1e4Oeb1ECeCxEV831HWtkIg';

        // makes a simple request to get total subs for the channel
        request(totalSubsUrl, (error, response, body) => {
            if (!error && response.statusCode == 200) {
                const obj = JSON.parse(body);
                // console.log(channelID);
                const totalSubs = parseInt(obj.items[0].statistics.subscriberCount);
                db.update_sub_count([totalSubs, channelID], (err, response) => {})
            }
        });

        youtube.reports.query(oneYearAvgViewDuration, (err, response) => {
            if (err) {
                console.log(err);
            } else {

                if (response.rows === undefined) {
                    response.rows = [
                        [null]
                    ];
                }

                db.read_id([channelID], (err, res) => {
                  console.log('KEY KEY: ', key)
                    db.update_avg_view_duration([res[0].id, response.rows[0][0]], (err, response) => {
                      console.log('STAGE 2: AVG VIEW DURATION ABOUT TO BE ADDED')
                        if (err) {
                            console.log(err);
                        } else {
                            console.log('STAGE 3: SUCCESS: ', response)
                        }
                    })
                });
            }
            next();
        });
    },
    device: (req, res, next) => {
        const auth = req.user.auth;
        const channelID = req.user.id;
        const key = req.user.key;

        const oneYearDevice = {
            auth: auth,
            ids: "channel==" + channelID,
            "start-date": lastYear,
            "end-date": today,
            metrics: "views",
            dimensions: 'deviceType',
        }

        youtube.reports.query(oneYearDevice, (err, response) => {
            if (err) {
                console.log('there was an error', err);
            }

            if (response.rows === undefined) {
                response.rows == [
                    [null]
                ];
                return next();
            } else {
            let update_device_type_params = [];

            for (let i = 0; i < response.rows.length; i++) {
                update_device_type_params.push(response.rows[i][1]);
            }

            update_device_type_params.push(key);

            db.update_device_type(update_device_type_params, (err, res) => {});
            return next();
            }
        });
    },
    thumbnail: (req, res, next) => {

        const thumbnail = 'https://www.googleapis.com/youtube/v3/channels?part=snippet&id=' + req.user.id + '&key=AIzaSyDnGuZZAv1e1e4Oeb1ECeCxEV831HWtkIg';
        request(thumbnail, function(error, response, body) {

            const obj = JSON.parse(body);
            if(obj.items.length != 0){


            db.update_thumbnailURL([obj.items[0].snippet.thumbnails.default.url, req.user.id], (err, res) => {
                if (err) {
                    console.log(err);
                } else {
                    console.log('THUMBNAIL UPDATE SUCCESS');
                }
            })


            return res.redirect('/#/dashboard');
            }
            return res.redirect('/#/dashboard');
        })
    },
    read_user: (req, res, next) => {

        if (req.user) {
            db.read_user([req.user.id], (err, res1) => {
                req.session.data = res1[0];
                return next();
            })
        } else {
            return res.status(200).redirect('/auth');
        }
    },
    read_id: (req, res, next) => {

      if(req.user.id === undefined){

        return res.status(500).redirect('/');
      }

        db.read_id([req.user.id], (err, res) => {

            if (req.user) {
                req.user.key = res[0].id;
                return next();
            } else {
                return res.status(500).redirect('/auth');
            }
        })
    },
    read_watch_data: (req, res, next) => {
        // console.log(req.session.data);
        db.read_avg_sec_watched((err, res2) => {
            req.session.data.avgsecwatched = res2[0].avg;
            next();
        });
    },
    read_individual_watched: (req, res, next) => {
        db.read_individual_watched([req.session.data.id], (err, minutes) => {
          if(err) conosle.log('read individual watched: ', err)
          console.log('minutes: ', minutes)
            req.session.data.avgindividualsec = minutes[0].avgsecwatched;
            next();
        })
    },
    read_device_data: (req, res, next) => {
        db.read_device_data([req.user.key], (err, response) => {
            if (err) {
                console.log('Error from read_device_data: ', err);
            }
            req.session.data.device = response[0];
            next();
        });
    },
    read_avg_device_data: (req, res, next) => {
        db.read_avg_device_data((err, response) => {
            if (err) {
                console.log('Error from read_avg_device_data', err)
            }
            req.session.data.device_avg = response[0];
            res.send(req.session.data);
        })
    },
    error: (req, res, next) => {
      // console.log('REQ: ', req);
      // console.log('RES: ', res);
      console.log('ERROR LOGGER');
      return next();
    },
    error2: (req, res, next) => {
      // console.log('REQ: ', req);
      // console.log('RES: ', res);
      console.log('ERROR LOGGER 2');
      return next();
    }


}
