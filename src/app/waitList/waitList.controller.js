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
        vm.parties = $firebaseArray(fireParties);

        vm.addParty = addParty;

        function addParty() {
            vm.parties.$add('another');
        }
    }

})();
