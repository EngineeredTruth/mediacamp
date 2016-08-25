app.directive('navBar', () => {
        return {
            restrict: 'E',
            templateUrl: '../templates/nav-bar.html',
            controller: 'navCtrl'
        }
    })
    .directive('chatBox', (socket, $rootScope) => {
        return {
            restrict: 'E',
            templateUrl: '../templates/chat-box.html',
            controller: 'chatCtrl',
            link: (scope, element, attribute) => {

                scope.$on('masterCtrl to chatDirective', (ev, msg) => {

                    if ($rootScope.userName === msg.user) {
                        $('#chat-log').append($('<li class="text text-right">').text(msg.message));
                    } else {
                      scope.newMessage = true;
                      scope.$apply();
                      console.log('scope.newMessage:', scope.newMessage);
                        $('#chat-log').append($('<li class="text text-left">').text(msg.user + ': ' + msg.message));
                    }
                })
            }
        }
    })
    .directive('chatList', function(socket, $rootScope) {
            return {
                restrict: 'A',
                templateUrl: '../templates/chat-list.html',
                link: (scope, element, attribute) => {
                    console.log(scope);

                    socket.emit('chatList to server');

                    socket.on('server to chatList', (userList) => {

                      $('.row-chat').remove();

                            for (var i = 0; i < userList.length; i++) {
                              console.log('ThumbnailULR received: ', userList[i].thumbnailURL);
                                $('<a target="_blank" href=http://www.youtube.com/channel/' + userList[i].channelID + '><div class="row-chat"><img class="chat-thumbnail" src='+userList[i].thumbnailurl+' /><li class="aUser">' + userList[i].userName + '</li></div></a>').appendTo(element);
                            }
                        });

                        scope.$on('masterCtrl to chatDirective', (ev, msg) => {
                          console.log('msg received from masterCtrl: ', msg);

                            if (element[0].innerText.search(msg.user) === -1) {
                                $('<a target="_blank" href=http://www.youtube.com/channel/' + msg.channelid + '><div class="row-chat"><img class="chat-thumbnail" src='+msg.thumbnailurl+' /><li class="aUser">' + msg.user + '</li></div></a>').appendTo(element);
                            }
                        });

                    }
                }
            })
