app.controller('advanceCtrl', function($rootScope, $scope, ngDialog, $sce, equipmentSrvc){

      $scope.clickToOpen = (x) => {
        $rootScope.x = x;
          console.log('Clicking Open: ', x);
          ngDialog.open({ template: '../templates/popupTmpl.html',
          className: 'ngdialog-theme-default',
          height: 440,
          width: 750,
          closeByDocument: true,
          cashe: false,
          controller: 'advanceArray'
        });
      };

      $scope.advanceArray = equipmentSrvc.advanceArray;

      $scope.url = $sce.trustAsResourceUrl('https://www.youtube.com/embed/'+$rootScope.x+'?autoplay=1')

  });
