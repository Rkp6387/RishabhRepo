(function () {
    'use strict';

    angular.module('ShoppingListCheckOff', [])
        .controller('ToBuyController', ToBuyController)
        .controller('AlreadyBoughtController', AlreadyBoughtController)
        .service('ShoppingListCheckOffService', ShoppingListCheckOffService);

    // Protecting from minification
    ToBuyController.$inject = ['ShoppingListCheckOffService'];
    function ToBuyController(ShoppingListCheckOffService) {
        var toBuyCtrl = this;

        toBuyCtrl.toBuyItems = ShoppingListCheckOffService.getToBuyItems();

        toBuyCtrl.buyItem = function (itemIndex) {
            ShoppingListCheckOffService.buyItem(itemIndex);
        };
    }

    AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];
    function AlreadyBoughtController(ShoppingListCheckOffService) {
        var boughtCtrl = this;

        boughtCtrl.boughtItems = ShoppingListCheckOffService.getBoughtItems();
    }

    function ShoppingListCheckOffService() {
        var service = this;

        // Predefined list of items to buy
        var toBuyItems = [
            { name: "Cookies", quantity: 10 },
            { name: "Chips", quantity: 5 },
            { name: "Soda", quantity: 2 },
            { name: "Chocolate", quantity: 3 },
            { name: "Milk", quantity: 1 }
        ];

        var boughtItems = [];

        service.getToBuyItems = function () {
            return toBuyItems;
        };

        service.getBoughtItems = function () {
            return boughtItems;
        };

        service.buyItem = function (itemIndex) {
            // Move item from toBuyItems to boughtItems
            var item = toBuyItems[itemIndex];
            boughtItems.push(item);
            toBuyItems.splice(itemIndex, 1);
        };
    }
})();
