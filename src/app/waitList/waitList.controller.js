(function () {
    'use strict';

    angular
        .module('app.waitList')
        .controller('WaitListController', WaitListController);

    WaitListController.$inject = ['$firebaseArray'];

    function WaitListController($firebaseArray) {
        var vm = this;

        //Points to data at Firebase
        var fireParties = new Firebase('https://waitandeat-alan.firebaseio.com/parties');

        function Party() {
            this.name = '';
            this.phone = '';
            this.size = '';
            this.done = false;
            this.notified = false;

        }

        // View model data
        vm.newParty = new Party();
        vm.parties = $firebaseArray(fireParties);
        vm.addParty = addParty;

        function addParty() {
            vm.parties.$add(vm.newParty);
            vm.newParty = new Party();
        }
    }

})();
