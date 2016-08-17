(function() {
  'use strict';

  angular
    .module('app')
    .factory("login", login);

  function login($firebaseArray, data, $location) {
    var ref = data.ref;
    var auth = firebase.auth();
    // vm.authData = auth;
    var vm = this;
    vm.canSubmit = {};
    vm.canSubmit = false;

    this.useGoogle = function() {
      var provider = new firebase.auth.GoogleAuthProvider();
      auth.signInWithPopup(provider).then(function(result) {
        $location.path('/login');
        console.log("User " + result.user.uid + " is logged in with " + provider);
        vm.canSubmit = true;
        console.log("Can Edit");
      }).catch(function(error) {
        console.log("Login Failed");
      });
    };

    //   this.createUser = function(username, password) {
    //     ref.createUser({
    //       email: username,
    //       password: password
    //     }, function(error, userData) {
    //       if (error) {
    //         console.log("Error creating user:", error);
    //       }
    //       else {
    //         console.log("Successfully created user account with uid:", userData.uid);
    //       }
    //     });
    //   }

    return vm;
  }
})();
