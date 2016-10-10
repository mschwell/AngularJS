(function () {
'use strict';

angular.module('MenuApp')
.component('items', {
  templateUrl: 'src/shoppinglist/templates/shoppinglist.template.html',
  bindings: {
    items: '<'
  }
});
})();
