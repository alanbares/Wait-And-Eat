(function() {
    'use strict';

    angular
        .module('app.waitList')
        .directive('abPartyForm', abPartyForm);

    function abPartyForm() {
        return {
            templateUrl: 'app/waitList/directives/partyForm.html',
            restrict: 'E',
            controller: 'PartyFormController',
            controllerAs: 'vm',
            scope: {}
        };
    }

    PartyFormController.$inject = ['partyService'];

    function PartyFormController(partyService) {

    }
})();
