app.controller('masterCtrl', ($scope, socket)=>{

$scope.$on('chatCtrl to masterCtrl', (ev, msg)=>{
  socket.emit('masterCtrl to server', msg);
  // console.log('Stage 2: ', msg);
})

socket.on('server to masterCtrl', (msg) => {
  $scope.$broadcast('masterCtrl to chatDirective', msg);
})

//Changing chatroom
// $scope.$on('changeRoom to masterCtrl', (ev, roomObj)=>{
//   socket.emit('Change room to server', roomObj);
// })

});
