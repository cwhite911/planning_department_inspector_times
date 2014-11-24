'use strict';

angular.module('inspect', ['ngRoute', 'leaflet-directive'])
  .config(['$routeProvider', function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'templates/main.html',
        controller: 'MainCtrl'
      })
      .when('/stats', {
        templateUrl: 'templates/stats.html',
        controller: 'StatsCtrl'
      });
  }]);
