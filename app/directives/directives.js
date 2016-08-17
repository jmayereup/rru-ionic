(function() {
  'use strict';

angular.module('app')

.directive('jmNavbar', function() {
  return {
    restrict: 'E',
    templateUrl: './app/directives/navbar.html',
    controller: 'NavCtrl',
    controllerAs: 'vm'
  };
})

.directive('jmMsgBoard', function() {
  return {
    restrict: "E",
    templateUrl: './app/directives/msgBoard.html',
    controller: 'MsgCtrl',
    controllerAs: 'vm'
  };
})


.directive('jmLinksForm', function(){
  return {
    restrict: "E",
    templateUrl: './app/directives/links-form.html'
  };

})

.directive('jmLinksList', function() {
  return {
    restrict: "E",
    templateUrl: './app/directives/links-list.html',
    controller: 'LinkCtrl',
    controllerAs: 'vm'
  };
});


})();
