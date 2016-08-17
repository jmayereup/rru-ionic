angular
    .module('app')
    .controller('MsgCtrl', MsgCtrl);

MsgCtrl.$inject = ["$firebaseArray", "$firebaseAuth", "login", "data"];

function MsgCtrl($firebaseArray, $firebaseAuth, login, data) {
    var vm = this;
    var ref = data.ref;
    vm.messages = data.messages;
    vm.canSubmit = login.canSubmit;

    vm.addMsg = function(m) {
        console.log(m);
        vm.messages.$add(m).then(function(ref) {
            var id = ref.key();
            console.log("added record with id " + id);
            vm.messages.$indexFor(id); // returns location in the array
        });
    };
};
