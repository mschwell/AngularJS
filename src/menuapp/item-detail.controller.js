(function () {
'use strict';

angular.module('MenuApp')
.controller('ItemDetailController', ItemDetailController);

ItemDetailController.$inject = ['item'];
function ItemDetailController(item) {
  var itemdetail = this;
  itemdetail.menuItems = item.menu_items;
  itemdetail.category = item.category.name;
}

})();
