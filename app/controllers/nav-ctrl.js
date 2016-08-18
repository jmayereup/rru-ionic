angular
  .module('app')
  .controller('NavCtrl', NavCtrl);

NavCtrl.$inject = ["nav", "$location", "login", "$routeParams"];

function NavCtrl(nav, $location, login, $routeParams) {

  var vm = this;
  vm.selected = 'm';
}
