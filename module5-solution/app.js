angular.module('YourApp', ['ngRoute'])
.config(function($routeProvider) {
  $routeProvider
    .when('/signup', {
      templateUrl: 'views/signup.html',
      controller: 'SignUpController'
    })
    .when('/myinfo', {
      templateUrl: 'views/myinfo.html',
      controller: 'MyInfoController'
    })
    .otherwise({
      redirectTo: '/'
    });
});
