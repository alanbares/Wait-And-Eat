(function () {
    'use strict';

    angular
        .module('app.waitList')
        .controller('WaitListController', WaitListController);

    WaitListController.$inject = ['firebaseDataService', 'partyService', 'sendTextMessageService'];

    function WaitListController (firebaseDataService, partyService, sendTextMessageService) {
        var vm = this;

        // View model methods
        vm.newParty = new partyService.Party();
        vm.parties = partyService.parties;
        vm.addParty = addParty;
        vm.removeParty = removeParty;
        vm.sendTextMessage = sendTextMessageService.sendTextMessage;
        vm.toggleDone = toggleDone;

        function addParty() {
            vm.parties.$add(vm.newParty);
            vm.newParty = new partyService.Party();
        }

        function removeParty(party) {
            vm.parties.$remove(party);
        }

        function sendTextMessage(party) {
            var newTextMessage = {
                phoneNumber: party.phone,
                size: party.size,
                name: party.name
            };
            firebaseDataService.textMessages.push(newTextMessage);
            party.notified = true;
            vm.parties.$save(party);
        }

        function toggleDone(party) {
            vm.parties.$save(party);
        }
    }

})();
