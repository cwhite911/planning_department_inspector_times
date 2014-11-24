'use strict';

angular.module('inspect')
  .factory('inspector', function($http, $filter){

    function getDiff(data){
      var diff,
          date;
      for (var i = 0, x = data.length; i < x; i++){
        diff = data[i + 1] - data[i];
        date = $filter('date')(data.time, 'h:mma');
        console.log({x: date , y: diff });
        data.lineChartData[0].values.push({x: date , y: diff });
      }
    }
    return {
      lineChartData: [
        {
          label: "Series-1",
          values: []
        }
      ],
      getDate: function (){
        var that = this;
        that.results = [];
        var d = that.date.split('-');
        that.date = d[1] + '/' + d[2] + '/' + d[0];
        var config = {
          params: {
            name: that.name.toUpperCase(),
            date: that.date
          }
        };
        $http.get('/inspections/getDay', config).success(function(data){
          that.results = data;
          var diff, unixTime;
          for (var i = 0, x = data.length; i < x; i++){
            i !== x - 1 ? diff = ((data[i + 1].time - data[i].time)/60000).toFixed(2) : diff = 0.00;
            diff = parseFloat(diff);
            unixTime = data[i].time/1000|0;
            that.lineChartData[0].values.push({x: data[i].time , y: diff });
          }
        });
    }
  }
});
