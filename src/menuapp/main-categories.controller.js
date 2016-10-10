(function () {
'use strict';

angular.module('MenuApp')
.controller('MainCategoriesController', MainCategoriesController);


MainCategoriesController.$inject = ['MenuDataService'];
function MainCategoriesController(MenuDataService) {
  var mainList = this;
  mainList.items = [];

  var promise = MenuDataService.getAllCategories();
  promise.then(function (response) {
    mainList.items = response.data;
  })
  .catch(function (error) {
    console.log("Something went terribly wrong.");
  });
  
}

})();
