app.controller('dashCtrl', function($scope, promiseObj, $timeout, $rootScope) {

$scope.chatVisibility = false;

$scope.newMessage = false;

$scope.toggleChat = () => {
  $scope.chatVisibility = !$scope.chatVisibility;
  $scope.newMessage = false;
  console.log($scope.chatVisibility);
}

$scope.toggleNewMessage = (argument) => {
  $scope.newMessage = argument;
  console.log($scope.newMessage);
}

console.log('PROMISE: ', promiseObj);

$scope.channelid = promiseObj.channelid;

$rootScope.loading = true;

if(promiseObj){
  $rootScope.loading = true;
}
else {
  $rootScope.loading = false;
}

const data = promiseObj;
const avg = parseInt(promiseObj.avgsecwatched).toFixed(0);

$rootScope.userName = data.username;

$scope.mostviewedvideo1  = data.mostviewedvideo1;
$scope.mostviewedvideo2  = data.mostviewedvideo2;
$scope.mostviewedvideo3  = data.mostviewedvideo3;

$scope.views1 = data.views1;
$scope.views2 = data.views2;
$scope.views3 = data.views3;

$scope.mostviewedname1 = data.mostviewedname1;
$scope.mostviewedname2 = data.mostviewedname2;
$scope.mostviewedname3 = data.mostviewedname3;

$scope.totalSubs = data.subscribercount;
$scope.totalSubs = data.subscribercount;
$scope.subRate = data.subscriberrate;
$scope.toggle = 1;

const sRate = $scope.subRate;
const tSubs = $scope.totalSubs;

$scope.progressValue = 0;

if(tSubs < 10000){

  $scope.toggle=1;

  const percentDone = (tSubs/100).toFixed(2);
  $scope.timeLeft = (((10000-tSubs) / sRate) * 30).toFixed(0);

  // console.log(percentDone);
  // console.log($scope.timeLeft);

  $timeout(function(){
    $scope.progressValue = percentDone;
  },200);

} else if (tSubs < 100000 && tSubs > 10000){
  $scope.toggle=2;


const percentDone = (tSubs/1000).toFixed(2);
$scope.timeLeft = (((100000-tSubs) / sRate) * 30).toFixed(0);

// console.log(percentDone);
// console.log($scope.timeLeft);

$timeout(function(){
  $scope.progressValue = percentDone;
},200);

} else if (tSubs < 1000000 && tSubs > 100000){
  $scope.toggle=3;
}

$scope.sharesChartObject = {};

$scope.sharesChartObject.type = "PieChart";

$scope.sharesChartObject.data = {"cols": [
    {id: "p", label: "Platform", type: "string"},
    {id: "s", label: "Shares", type: "number"}
], "rows": [
    {c: [
        {v: "Facebook"},
        {v: data.facebook},
    ]},
    {c: [
        {v: "Copy & Paste"},
        {v: data.copy_paste}
    ]},
    {c: [
        {v: "Other"},
        {v: data.other},
    ]},
    {c: [
        {v: "Text Message"},
        {v: data.text_message},
    ]},
    {c: [
        {v: 'Facebook Message'},
        {v: data.facebook_messenger},
    ]},
    {c: [
      {v: 'Whats App'},
      {v: data.whats_app},
    ]},
    {c: [
      {v: 'Gmail'},
      {v: data.gmail},
    ]},
    {c: [
      {v: 'GooglePlus'},
      {v: data.googleplus},
    ]},
    {c: [
      {v: 'LinkedIN'},
      {v: data.linkedin},
    ]},
    {c: [
      {v: 'Reddit'},
      {v: data.reddit},
    ]},
    {c: [
      {v: 'Hangouts'},
      {v: data.hangouts},
    ]},
    {c: [
      {v: 'Twitter'},
      {v: data.twitter},
    ]}
]};


$scope.sharesChartObject.options = {
    pieHole: 0.4,
    'title': 'Where your videos are being shared',
    'fontSize': 19,
    'fontName': 'Open sans',
    'height': 550,
    'titleTextStyle': {
      fontName: 'League Spartan',
      'fontSize': 25
    },
    'chartArea': {'width': '75%', 'height': '75%'},
    colors:['#1C75BC','#106B84','#1E282D','#C9505E','#151515','#2d8659','#e67300','#990099','#996633','#b32d00','#ff9999','#00e673','#ffff99']
};

$scope.minWatchedChartObject = {};

$scope.minWatchedChartObject.type = 'ColumnChart';

$scope.minWatchedChartObject.data = { 'cols': [
  {id: 'a', label: 'Avg Minutes Watched', type: 'string'},
  {id: 'm', label: 'Minutes', type: 'number'},
  {role: 'style', type:'string'}
], 'rows': [
  {c: [
    {v: 'Your Avg. Minutes Watched'},
    {v: data.avgindividualsec/60},
    {v:'#106B84'}
  ]},
  {c: [
    {v: 'Avg. Minutes Watched For All Media Campers'},
    {v: avg/60},
    {v: '#C9505E'}
  ]}
]};

$scope.minWatchedChartObject.options = {
    'title': 'Average Minutes Watched Compared To Other Campers',
    'fontSize': 19,
    'fontName': 'Open sans',
    'height': 550,
    'titleTextStyle': {
      fontName: 'League Spartan',
      'fontSize': 23,
      'align':'center'
    },
    'chartArea': {'width': '65%', 'height': '65%'},
    animation: {
      duration: 300,
      easing: 'out',
      startup: true,
    },
   legend: { position: "none" }
};

// #C9505E warning
// #151515 nav bar
// #1C75BC hover
// #1E282D wallpaper
// #47AD76 call to action
// #106B84 submit
// #F5F5F5 background for playbuttons
// #266B99 Blue text

const device_data = promiseObj.device;

$scope.deviceChartObject = {};

$scope.deviceChartObject.type = "PieChart";

$scope.deviceChartObject.data = {"cols": [
    {id: "p", label: "Device", type: "string"},
    {id: "s", label: "Views", type: "number"}
], "rows": [
    {c: [
        {v: "Desktop"},
        {v: device_data.desktop},
    ]},
    {c: [
        {v: "Game Console"},
        {v: device_data.game_console}
    ]},
    {c: [
        {v: "Mobile"},
        {v: device_data.mobile},
    ]},
    {c: [
        {v: "Tablet"},
        {v: device_data.tablet},
    ]},
    {c: [
        {v: 'TV'},
        {v: device_data.tv},
    ]},
    {c: [
        {v: 'Unknown Platform'},
        {v: device_data.unknown_platform}
    ]}
]};

$scope.deviceChartObject.options = {
    'pieHole': 0.35,
    'title': 'Where Your Videos Are Being Viewed',
    legend: {position: 'none'},
    'fontSize': 14,
    'fontName': 'Open sans',
    'height': 350,
    'titleTextStyle': {
      fontName: 'League Spartan',
      'fontSize': 20
    },
    'chartArea': {'width': '70%', 'height': '70%'},
    colors:['#1C75BC','#106B84','#1E282D','#C9505E','#151515','#2d8659','#e67300','#491b49','#996633','#b32d00','#ff9999','#4b4f00','#ffff99']
};

const device_avg = promiseObj.device_avg;

console.log(device_avg);

$scope.deviceAvgChartObject = {};

for(let prop in device_avg){
  device_avg[prop] = parseFloat(device_avg[prop]);
}

console.log(device_avg);

$scope.deviceAvgChartObject.type = "PieChart";

$scope.deviceAvgChartObject.data = {"cols": [
    {id: "p", label: "Device", type: "string"},
    {id: "s", label: "Views", type: "number"}
], "rows": [
    {c: [
        {v: "Desktop"},
        {v: device_avg.desktop_avg},
    ]},
    {c: [
        {v: "Game Console"},
        {v: device_avg.game_console_avg}
    ]},
    {c: [
        {v: "Mobile"},
        {v: device_avg.mobile_avg},
    ]},
    {c: [
        {v: "Tablet"},
        {v: device_avg.tablet_avg},
    ]},
    {c: [
        {v: 'TV'},
        {v: device_avg.tv_avg},
    ]},
    {c: [
        {v: 'Unknown Platform'},
        {v: device_avg.unknown_platform_avg}
    ]}
]};

$scope.deviceAvgChartObject.options = {
    'pieHole': 0.35,
    'title': 'Avg Of All Campers',
    'fontSize': 14,
    'fontName': 'Open sans',
    'height': 350,
    'titleTextStyle': {
      fontName: 'League Spartan',
      'fontSize': 20
    },
    'chartArea': {'width': '70%', 'height': '70%'},
    colors:['#1C75BC','#106B84','#1E282D','#C9505E','#151515','#2d8659','#e67300','#990099','#996633','#b32d00','#ff9999','#00e673','#ffff99']
};


});
