var app = angular.module('app', ['ngRoute', 'firebase', 'ui.tinymce', 'ngSanitize', 'angular-google-adsense'])
.filter("myHtml", ['$sce', function($sce) {
  return function(htmlCode) {
    return $sce.trustAsHtml(htmlCode);
  };
}])

.config(['$routeProvider', '$locationProvider',
  function($routeProvider, $locationProvider) {
    $routeProvider
      .when('/msg', {
        templateUrl: 'app/views/home.html'
      })
      .when('/class/:cls', {
        templateUrl: 'app/views/class.html'
        // controller: 'LinkCtrl',
        // controllerAs: 'vm'
      })
      .when('/login', {
        templateUrl: 'app/views/login.html',
        controller: 'LoginCtrl',
        controllerAs: 'vm'
      })
      .when('/setup', {
        templateUrl: "app/views/setup.html",
        controller: 'SetupCtrl',
        controllerAs: 'vm'
      })
      .when('/', {
        templateUrl: "app/views/home.html",
      })
      .otherwise({
        redirectTo: '/msg'
      });
    $locationProvider.html5Mode(true);


  }
]);
