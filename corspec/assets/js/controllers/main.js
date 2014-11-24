'use strict';

/**
 * @ngdoc function
 * @name corPingApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the corPingApp
 */
angular.module('inspect')
  .controller('MainCtrl', ['$scope', '$http', 'leafletData', 'inspector', function ($scope, $http, leafletData, inspector) {
    //Sends event to all other subscribers
    $scope.inspector = inspector;
    $scope.getDate = function (inspector){
      var config = {
        params: {
          UPDATE_DATE: inspector.name,
          PERM_INSPECTOR_NAME: inspector.date
        }
      };
      $http.get('/inspectors/getDay', { params: params }).success(function(res){
        console.log(res);
      });

    }
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
                raleigh:{

                  name: "Basic Base Map",
                    type: "dynamic",
                    url: "http://maps.raleighnc.gov/arcgis/rest/services/BaseMap/MapServer",
                    visible: false,
                    layerOptions: {
                        layers: ['*'],
                          opacity: 1,
                          attribution: "Copyright:© 2014 City of Raleigh"
                    }
                }
            },


}

  });

  }]);
