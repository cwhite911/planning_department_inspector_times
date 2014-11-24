'use strict';

angular.module('inspect', ['ngRoute'])
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
