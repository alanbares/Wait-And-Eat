(function () {
    'use strict';

    angular
        .module('app.auth')
        .controller('AuthController', AuthController);

    AuthController.$inject = ['$firebaseAuth'];

    function AuthController($firebaseAuth) {
        var vm = this;
        var firebaseReference = new Firebase('https://waitandeat-alan.firebaseio.com/');
        var firebaseAuthObject = $firebaseAuth(firebaseReference);

        vm.user = {
            email: '',
            password: ''
        };

        // View model methods
        vm.register = register;

        function register(user) {
            return firebaseAuthObject.$createUser(user)
                .then(function(registeredUser) {
                    console.log(registeredUser);
                })
                .catch(function(error) {
                    console.log(error);
                });
        }
    }

})();
