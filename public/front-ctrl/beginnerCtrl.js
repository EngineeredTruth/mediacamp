app.controller('beginnerCtrl', function($scope, ngDialog){

      $scope.clickToOpen =  () => {
          console.log('Clicking Open');
          ngDialog.open({ template: '../templates/popupTmpl.html',
          className: 'ngdialog-theme-default',
          height: 700,
          width: 650,
          closeByDocument: true,
          cashe: false});
      };

  });
