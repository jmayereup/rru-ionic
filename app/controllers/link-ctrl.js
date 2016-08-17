angular
.module('app')
.controller('LinkCtrl', LinkCtrl);

LinkCtrl.$inject = ["$firebaseArray", "$scope", "login", "data", "nav", "$routeParams"];

function LinkCtrl($firebaseArray, $scope, login, data, nav, $routeParams) {

  var vm = this;
  var ref = data.ref;
  vm.links = data.links;
  vm.allLinks = data.links;
  vm.cls = data.cls;
  vm.units = data.units;
  vm.showMe = false;
  vm.toggleForm = true;
  vm.item = {};
  vm.canSubmit = login.canSubmit;
  console.log("Can Submit: " + vm.canSubmit);

  vm.nav = "none";

  if($routeParams.cls === "e1") vm.nav = "English 1";
  else if($routeParams.cls === "e2") vm.nav = "English 2";
  else if($routeParams.cls === "e3") vm.nav = "English 3";
  else if($routeParams.cls === "other") vm.nav = "Other";
  else if($routeParams.cls === "teacher") vm.nav = "Teacher";
  else vm.nav = "Other";

  vm.tinymceOptions = {
    plugins: "image link code advlist",
    menubar: false,
    toolbar: 'undo redo styleselect image link bold italic alignleft aligncenter alignright bullist numlist outdent indent code',
    height: 260
  };


  vm.updateLink = function(item) {
    item.showMe = false;
    if (!item.clsName) {
      alert("Please enter a class.");
      return 0;
    }
    if (item.$id === undefined) {
      vm.links.$add(item).then(function(ref) {
        var id = ref.key;
        console.log("added record with id " + id);
        vm.links.$indexFor(id); // returns location in the array
        vm.item.clsName = item.clsName;
        vm.item.order = item.order;
        vm.item.type = item.type;
        vm.toggleForm = false;
        // vm.item = {};
        item = {};
        return 0;
      });
    }
    if (item.$id != undefined){
      vm.links.$save(item).then(function(ref) {
        ref.key === item.$id;
        console.log(item);
        vm.item ={};
        vm.item.clsName = item.clsName;
        vm.item.unit = item.unit;
        vm.toggleForm = false;
        return 0;
      });
    }
  };


vm.loadLink = function(l) {
  vm.item = l;
  vm.toggleForm = true;
};

}
