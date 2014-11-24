'use strict';

/**
 * @ngdoc function
 * @name corPingApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the corPingApp
 */
angular.module('inspect')
  .controller('MainCtrl', ['$scope', '$http', '$filter', 'leafletData', 'inspector', function ($scope, $http, $filter, leafletData, inspector) {
    //Sends event to all other subscribers
    $scope.inspector = inspector;


    $scope.$watchCollection('inspector', function(){
      if($scope.inspector.lineChartData[0].values.length > 0){
      angular.element('#lineChart').epoch({
        type: 'line',
        data: $scope.inspector.lineChartData,
        ticks: {right: 5, bottom: 8, left: 5 },
        tickFormats: { bottom: function(d) { return $filter('date')(d, 'h:mma')} },
        height: 500,
        width: 500
      });
      console.log($scope.inspector);
    }
    });


      angular.extend($scope, {
      center: {
        lat: 35.843768,
        lng: -78.6450559,
        zoom: 13
      },
      layers: {
            baselayers: {
                xyz: {
                    name: 'OpenStreetMap (XYZ)',
                    url: 'https://{s}.tiles.mapbox.com/v3/ctwhite.g8n5fjjp/{z}/{x}/{y}.png',
                    type: 'xyz'
                },

            }
        },
        markers: {}




  });

  }]);
