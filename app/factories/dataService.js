(function() {
  'use strict';
  angular.module('app')

  .factory("data", data);

  function data($firebaseArray, $firebaseObject) {
    var vm = this;
    // Initialize Firebase
    var config = {
      apiKey: "AIzaSyDYDZRJj1z0KzAlEu9cn85fx0fz2KzIZlM",
      authDomain: "amber-torch-7838.firebaseapp.com",
      databaseURL: "https://amber-torch-7838.firebaseio.com",
      storageBucket: "amber-torch-7838.appspot.com",
    };
    firebase.initializeApp(config);

    var ref = firebase.database().ref();
    // var ref = rootRef;
    vm.ref = ref;
    vm.messages = $firebaseArray(ref.child('msgs'));
    vm.links = $firebaseArray(ref.child('links').orderByChild('order'));
    vm.cls = $firebaseArray(ref.child('cls'));

    return vm;
  }

})();
