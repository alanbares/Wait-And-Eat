(function() {
    'use strict';

    angular
        .module('app.auth')
        .directive('abAuthForm', abAuthForm);

    function abAuthForm() {
        return {
            templateUrl: 'app/auth/authForm.html',
            restrict: 'E',
            controller: AuthFormController,
            controllerAs: 'vm',
            bindToController: true,
            scope: {
            }
        };
    }

    function AuthFormController() {
        var vm = this;
    }
})();
