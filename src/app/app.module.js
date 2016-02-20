(function() {
    'use strict';

    angular
        .module('app', [
        //Angular modules.
        'ngRoute',

        //Third Party Modules.
        'firebase',

        //Custom modules.
        'app.landing',
        'app.waitList'
    ]);

})();
