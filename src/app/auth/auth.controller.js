(function () {
    'use strict';

    angular
        .module('app.auth')
        .controller('AuthController', AuthController);

    AuthController.$inject = ['$firebaseAuth'];

    function AuthController($firebaseAuth) {
        var vm = this,
            firebaseReference = new Firebase('https://waitandeat-alan.firebaseio.com/'),
            firebaseAuthObject = $firebaseAuth(firebaseReference);

        vm.user = {
            email: '',
            password: ''
        };

        // View model methods
        vm.register = register;

        function register(user) {
            return firebaseAuthObject.$createUser(user);
        }
    }

})();
