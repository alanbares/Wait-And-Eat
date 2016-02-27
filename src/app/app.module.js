(function() {
    'use strict';

    angular
        .module('app', [
        //Angular modules.
        'ngRoute',

        //Third Party Modules.
        'firebase',

        //Custom modules.
        'app.auth',
        'app.core',
        'app.landing',
        'app.layout',
        'app.waitList'
    ])
    .config(configFunction);

    configFunction.$inject = ['$routeProvider'];

    function configFunction($routeProvider) {
        $routeProvider.otherwise({
            redirectTo: '/'
        })
    }

})();
