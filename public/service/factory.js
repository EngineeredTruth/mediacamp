angular.module('app')
  .factory('factory', function($http){
    return {
      getAllData: function(){
        return $http({
          method: 'GET',
          url: '/getAllData'
        }).then(function(response){
          return response.data;
        })
      },
      authCheck: function(){
        return $http({
          method: 'GET',
          url: '/authCheck'
        }).then(function(response){
          return response.data;
        })
      }
    }
  });
