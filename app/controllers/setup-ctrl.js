angular
  .module('app')
  .controller('SetupCtrl', SetupCtrl);

SetupCtrl.$inject = ["$firebaseArray", "$firebaseObject", "$scope", "login", "data"];

function SetupCtrl($firebaseArray, $firebaseObject, $scope, login, data) {
  var vm = this;
  var ref = data.ref;
  var refUrl = data.refUrl;
  vm.cls = data.cls;
  vm.units = data.units;

  vm.thisUnit = function(item) {
    var newItem = vm.cls.$save(item);
    newItem.setPriority(1);
    console.log(item);
  };
  //$scope.profile = data.profile;

  vm.showMe = false;
  vm.u = {};
  vm.canSubmit=login.canSubmit;
  console.log("Login " + login.canSubmit);

  // vm.recheckStatus = function() {
  //   if (login.canSubmit === true) return true;
  // };

  // vm.callLogin = function() {
  //   login.useGoogle();
  // };

  this.useGoogle = function() {
    login.useGoogle();
  }

  console.log("SetupCtrl - Can Submit " + vm.canSubmit);

  vm.addUnit = function(clsName) {
    //var newListRef = ref.child('units');
    //var newUnitRef = newListRef.push()
    //newUnitRef.set({
    data.units.$add({
      "unitName": "Enter Name",
      "unitDescription": "Enter Description",
      "unitCls": clsName,
      "unit": "99.5"
    }).then(function(ref) {
      var id = ref.key();
      data.units.$indexFor(id);
      console.log("added record with id " + id);
    });
    //var path = newUnitRef.toString();
    //newRef.$indexFor(newRef); // returns location in the array

  };


  vm.addCls = function() {
    var clsListRef = ref.child('cls');
    var newClsRef = clsListRef.push();
    newClsRef.set({
      'clsName': 'Enter Name',
      'clsDescription': 'Enter Description'
    });
    var path = newClsRef.toString();
    console.log("added record with id " + path);
    // path will be something like
    // 'https://samplechat.firebaseio-demo.com/message_list/-IKo28nwJLH0Nc5XeFmj'
  };

  vm.deleteCls = function(id) {
    console.log("Deleting " + id);
    var arrayId = vm.cls.$indexFor(id);
    var item = vm.cls[arrayId];
    vm.cls.$remove(item).then(function(ref) {
      ref.key() === item.$id; // true
    });
  };

  ref.on("child_changed", function(snapshot) {
    var changedPost = snapshot.val();
    console.log("Updated");
  });

  var onComplete = function(error) {
    if (error) {
      console.log('Synchronization failed');
    }
    else {
      console.log('Synchronization succeeded');
    }
  };


  vm.recheck = function() {};
}
