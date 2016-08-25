app.controller('chatCtrl', ($scope, $rootScope) => {

    $scope.groups = false

    $scope.toggleGroups = () => {
        $scope.groups = !$scope.groups;
    }

    //m is what is being passed around
    $scope.sendMessage = (m) => {
        if (m != '') {
            msg = {
                user: $rootScope.userName,
                message: m,
                channelid: $scope.channelid
            };
            $scope.$emit('chatCtrl to masterCtrl', msg);
            // console.log('Stage 1: ', msg);
            $scope.text = '';
        }
    }

    //changing chatroom
    // $scope.changeRoom = (room) => {
    //   roomObj = {
    //     userName: $rootScope.userName,
    //     room: room,
    //     channelid: $scope.channelid
    //   };
    //   $scope.$emit('changeRoom to masterCtrl', roomObj);
    // }

});
