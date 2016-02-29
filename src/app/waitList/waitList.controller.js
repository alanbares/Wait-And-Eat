(function () {
    'use strict';

    angular
        .module('app.waitList')
        .controller('WaitListController', WaitListController);

    WaitListController.$inject = ['partyService', 'user'];

    function WaitListController (partyService, user) {
        var vm = this;

        // View model methods
        vm.parties = partyService.getPartiesByUser(user.uid);
    }

})();
