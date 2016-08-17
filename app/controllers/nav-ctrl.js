angular
  .module('app')
  .controller('NavCtrl', NavCtrl);

NavCtrl.$inject = ["nav", "$location", "login"];

function NavCtrl(nav, $location, login) {

  var vm = this;

  // vm.cls = nav.cls; //for menu
  // var obj = vm.cls;
  // vm.loaded = false;
  // obj.$loaded()
  //   .then(function(data) {
  //     console.log(data === obj);
  //     vm.loaded = true;
  //     return data === obj;
  //   })
  //   .catch(function(error){
  //     console.log("Error:", error);
  //     vm.loaded = false;
  //     return false;
  //   });

    vm.useGoogle = function() {
      return login.useGoogle();
    };
//console.log("Nav1: " + vm.clsName);


// vm.assignCls = function(item) {
//   nav.clsName = item;
//   $location.path('/class');
//   //console.log("Nav2: " + nav.clsName);
//   return item;
// };
}
