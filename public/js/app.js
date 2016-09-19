var app = angular.module('app',["ui.router",'ui.bootstrap','ngAnimate','ngTouch', "googlechart", 'btford.socket-io','ngDialog'])
  .constant('socket',io())
  .config(function($stateProvider, $urlRouterProvider){

    $stateProvider
      .state('home', {
        url: '/',
        templateUrl: './views/home.html',
        controller: 'homeCtrl'
      })
      .state('courses', {
        url: '/courses',
        templateUrl: './views/courses.html',
        controller: 'homeCtrl'
      })
      .state('equipment', {
        url: '/equipment',
        templateUrl: './views/equipment.html',
        controller: 'homeCtrl'
      })
      .state('beginner', {
        url: '/beginner',
        templateUrl: './views/beginner.html',
        controller: 'beginnerCtrl'
      })
      .state('intermediate', {
        url: '/intermediate',
        templateUrl: './views/intermediate.html',
      })
      .state('advance', {
        url: '/advance',
        templateUrl: './views/advance.html',
      })
      .state('review', {
        url: '/review',
        templateUrl: './views/popupTmpl.html',
        controller: 'homeCtrl'
      })
      .state('best-practices', {
        url: '/best-practices',
        templateUrl: './views/best-practices.html',
        controller: 'homeCtrl'
      })
      .state('dashboard', {
        url: '/dashboard',
        templateUrl: './views/dashboard.html',
        controller: 'dashCtrl',
        resolve: {
          promiseObj: function(factory) {
            return factory.getAllData();
          }
        }
      });

      $urlRouterProvider.otherwise('/');

  });
