'use strict';

var angularApp = angular.module('hipiApp', ['ngRoute', 'ui.bootstrap']);

// Route configuration
angularApp.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.when('/', { templateUrl: '/templates/hipi.html', controller: 'HipiController'})
    				.when('/led', { templateUrl: '/templates/led.html', controller: 'LedController'})
                  .otherwise({redirectTo: '/', caseInsensitiveMatch: true})
}]);

// Write other booting processes here