(function() {
    'use strict';

    angular
        .module('app.layout')
        .directive('abNavbar', abNavbar)

    function abNavbar() {
        return {
            templateUrl: 'app/layout/navbar.html',
            restrict: 'E'
        };
    }
})();
