(function() {
  'use strict';
  angular.module('app')

  .factory("nav", nav);

  function nav(data) {
    var vm = this;
    vm.cls = data.cls;
    vm.clsName = "English 1";
    return vm;


  }

})();
