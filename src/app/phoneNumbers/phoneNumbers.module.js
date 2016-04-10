(function() {
    'use strict';
    angular.module('ngIntlTelInput', []);
    angular.module('ngIntlTelInput').provider('ngIntlTelInput', function() {
        var me = this;
        var props = {};
        var setFn = function(obj) {
            if (typeof obj === 'object') {
                for (var key in obj) {
                    props[key] = obj[key];
                }
            }
        }
        ;
        me.set = setFn;
        me.$get = ['$log', function($log) {
            return Object.create(me, {
                init: {
                    value: function(elm) {
                        if (!window.intlTelInputUtils) {
                            $log.warn('intlTelInputUtils is not defined. Formatting and validation will not work.');
                        }
                        elm.intlTelInput(props);
                    }
                },
            });
        }
        ];
    });
    angular.module('ngIntlTelInput').directive('ngIntlTelInput', ['ngIntlTelInput', '$log', function(ngIntlTelInput, $log) {
        return {
            restrict: 'A',
            require: 'ngModel',
            link: function(scope, elm, attr, ctrl) {
                if ((!!attr.type && (attr.type !== 'text' && attr.type !== 'tel')) || elm[0].tagName !== 'INPUT') {
                    $log.warn('ng-intl-tel-input can only be applied to a *text* or *tel* input');
                    return;
                }
                if (attr.defaultCountry) {
                    ngIntlTelInput.set({
                        defaultCountry: attr.defaultCountry
                    });
                }
                ngIntlTelInput.init(elm);
                ctrl.$validators.ngIntlTelInput = function(value) {
                    if (value || elm[0].value.length > 0) {
                        return elm.intlTelInput("isValidNumber");
                    } else {
                        return true;
                    }
                }
                ;
                ctrl.$parsers.push(function(value) {
                    return elm.intlTelInput('getNumber').replace(/[^\d]/, '');
                });
                ctrl.$formatters.push(function(value) {
                    if (value) {
                        if (value.charAt(0) !== '+') {
                            value = '+' + value;
                        }
                        elm.intlTelInput('setNumber', value);
                    }
                    return value;
                });
            }
        };
    }
    ]);
})();
