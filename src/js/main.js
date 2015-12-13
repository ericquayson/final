;(function () {

  angular.module('ncpride', ['ngRoute'], function($routeProvider) {
    $routeProvider
    .when('/', {
      redirectTo: '/landing'
    })
    .when('/landing', {
      templateUrl: 'partials/landing.html',
    })
  });



})();
