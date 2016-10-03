(function () {
'use strict';
  angular.module('NarrowItDownApp', [])
  .controller('NarrowItDownController', NarrowItDownController)
  .service('MenuSearchService',MenuSearchService)
  .constant('ApiBasePath', "https://davids-restaurant.herokuapp.com")
  .directive('foundItems',FoundItemsDirective);

  function FoundItemsDirective () {
    var ddo = {
      templateUrl: 'foundItems.html',
      scope: {
        items: '<',
        onRemove: '&'
      },
      controller: FountItemsDirectiveController,
      controllerAs: 'list',
      bindToController: true
    };
    return ddo;
  }

  function FountItemsDirectiveController() {
    var list = this;

    list.foundItemsStatus = function () {
        if (list.items) {
          return list.items.length == 0;
        }
        else {
          return false;
        }
    }
  }

  NarrowItDownController.$inject = ['MenuSearchService'];
  function NarrowItDownController(MenuSearchService) {
    var narrow = this;

    narrow.getMatchedMenuItems = function (searchTerm) {
      var promise =  MenuSearchService.getMatchedMenuItems(searchTerm);
      promise.then(function (response) {
        narrow.foundItems = response;
      })
      .catch(function (error) {
        console.log("Something went terribly wrong.");
      });
    }

    narrow.removeItem = function (itemIndex) {
      MenuSearchService.removeItem(itemIndex);
    }
  }

  MenuSearchService.$inject = ['$http','ApiBasePath']
  function MenuSearchService($http, ApiBasePath) {
    var service =  this;
    var foundItems = [];

    service.getMatchedMenuItems = function (searchTerm) {
      return $http({
        method: "GET",
        url: (ApiBasePath + "/menu_items.json")
      }).then(function (result) {
          foundItems = [];
          if (searchTerm != undefined && searchTerm) {
            var totalItems = result.data.menu_items.length;
            for (var i = 0; i < totalItems; i++) {
              if (result.data.menu_items[i].description.toLowerCase().indexOf(searchTerm) >= 0) {
                foundItems.push(result.data.menu_items[i]);
              }
            }
          }
          return foundItems;
      });
    }

    service.removeItem = function (itemIndex) {
      foundItems.splice(itemIndex,1);
    }
  }
})();
