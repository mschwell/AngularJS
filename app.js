(function() {
    'use strict';

    angular.module('ShoppingListCheckOff', [])
        .controller('ToBuyController', ToBuyController)
        .controller('AlreadyBoughtController', AlreadyBoughtController)
        .service('ShoppingListCheckOffService', ShoppingListCheckOffService);

    ToBuyController.$inject = ['ShoppingListCheckOffService'];

    function ToBuyController(ShoppingListCheckOffService) {
        var toBuy = this;

        toBuy.items = ShoppingListCheckOffService.itemsToBuy;

        toBuy.moveItem = function(itemIndex) {
            ShoppingListCheckOffService.moveItem(itemIndex);
        };
    }

    AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];

    function AlreadyBoughtController(ShoppingListCheckOffService) {
        var alreadyBought = this;
        alreadyBought.items = ShoppingListCheckOffService.itemsAlreadyBought;
    }

    function ShoppingListCheckOffService() {
        var service = this;

        service.itemsToBuy = [
            { name: "Apples", quantity: 2 },
            { name: "Mangos", quantity: 4 },
            { name: "Milk", quantity: 3 },
            { name: "Cookies", quantity: 10 },
            { name: "Juice", quantity: 6 }
        ];

        service.itemsAlreadyBought = [];

        service.moveItem = function(itemIndex) {
            var item = service.itemsToBuy.splice(itemIndex, 1)[0];
            service.itemsAlreadyBought.push(item);
        };
    }

})();
