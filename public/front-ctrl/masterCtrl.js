app.controller('masterCtrl', ($scope, socket, factory, $rootScope)=>{

$scope.loading = true;

const authCheck = () => {
  factory.authCheck().then((response)=>{

    $scope.loading = response.loggedin
    console.log('authCheck response: ', $scope.loading);
  })
}

authCheck();

$scope.$on('chatCtrl to masterCtrl', (ev, msg)=>{
  socket.emit('masterCtrl to server', msg);
  // console.log('Stage 2: ', msg);
})

socket.on('server to masterCtrl', (msg) => {
  $scope.$broadcast('masterCtrl to chatDirective', msg);
})

});
