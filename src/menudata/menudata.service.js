(function () {
'use strict';

angular.module('MenuApp')
.service('MenuDataService',MenuDataService)
.constant('ApiBasePath', "https://davids-restaurant.herokuapp.com");

MenuDataService.$inject = ['$http','ApiBasePath']
function MenuDataService ($http, ApiBasePath) {
  var menuDataService = this;

  menuDataService.getAllCategories = function() {
    var response = $http({
        method: "GET",
        url: (ApiBasePath + "/categories.json")
      });

    return response;
  }

  menuDataService.getItemsForCategory = function (categoryShortName) {
    var response = $http({
        method: "GET",
        url: (ApiBasePath + "/menu_items.json"),
        params: {
          category: categoryShortName
        }
      });

    return response;
  }

}

})();
