app.controller('beginnerCtrl', function($rootScope, $scope, ngDialog, $sce, equipmentSrvc){

      $scope.clickToOpen = (x) => {
        $rootScope.x = x;
          console.log('Clicking Open: ', x);
          ngDialog.open({ template: '../templates/popupTmpl.html',
          className: 'ngdialog-theme-default',
          height: 700,
          width: 750,
          closeByDocument: true,
          cashe: false,
          controller: 'beginnerCtrl'
        });
      };

      $scope.beginnerArray = equipmentSrvc.beginnerArray;

      $scope.url = $sce.trustAsResourceUrl('https://www.youtube.com/embed/'+$rootScope.x+'?autoplay=1')

  });
