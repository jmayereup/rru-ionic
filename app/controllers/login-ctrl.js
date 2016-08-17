angular
  .module('app')
  .controller('LoginCtrl', LoginCtrl);

LoginCtrl.$inject = ["$firebaseArray", "$scope", "login", "$location"];

function LoginCtrl($firebaseArray, $scope, login, $location) {
  var vm = this;
  vm.canSubmit = false;
  vm.canEdit = function() {vm.canSubmit = login.canSubmit;};
  vm.useGoogle = function() {
    return login.useGoogle();
  };
  vm.setup = function() {
    $location.path('/setup');
  };
}
