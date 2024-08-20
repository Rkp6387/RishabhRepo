(function() {
    'use strict';
    
    angular.module('LunchCheck', [])
        .controller('LunchCheckController', LunchCheckController);

    LunchCheckController.$inject = ['$scope'];

    function LunchCheckController($scope) {
        var ctrl = this;

        ctrl.lunchItems = "";
        ctrl.message = "";
        ctrl.messageClass = "";

        ctrl.checkLunch = function() {
            var items = ctrl.lunchItems.split(',')
                .map(item => item.trim())
                .filter(item => item.length > 0);

            if (items.length === 0) {
                ctrl.message = "Please enter data first";
                ctrl.messageClass = "error";
            } else if (items.length <= 3) {
                ctrl.message = "Enjoy!";
                ctrl.messageClass = "success";
            } else {
                ctrl.message = "Too much!";
                ctrl.messageClass = "success";
            }
        };
    }
})();
