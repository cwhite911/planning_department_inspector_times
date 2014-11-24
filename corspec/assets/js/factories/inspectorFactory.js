'use strict';

angular.module('inspect')
  .factory('inspector', function($http){
    return {
      getDate: function (inspector){
        var d = inspector.date.split('-');
        inspector.date = d[1] + '/' + d[2] + '/' + d[0];
        var config = {
          params: {
            name: inspector.name.toUpperCase(),
            date: inspector.date
          }
        };
        $http.get('/inspections/getDay', config).success(function(res){
          console.log(res);
          return res;
        });
    }
  }
});
