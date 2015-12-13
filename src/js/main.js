;(function () {

  angular.module('ncpride', ['ngRoute'], function($routeProvider) {
    $routeProvider
    .when('/home', {
      redirectTo: '/landing'
    })
    .when('/landing', {
      templateUrl: 'partials/landing.html',
    })
    .when('/History', {
      templateUrl: 'partials/history.html',
    })
    .when('/Nightfest', {
      templateUrl: 'partials/nightfest.html',
    })
    .when('/pride', {
      templateUrl: 'partials/pride2015.html',
    })
    .when('/Apparel', {
      templateUrl: 'partials/apparel.html',
    });

  })

})();
