(function () {
"use strict";

angular.module('public')
.service('InfoService', InfoService);

function InfoService() {
  var service = this;
  service.info = {};
  service.favoriteDish = null;

  service.getInfo = function() {
    return service.info;
  }
  service.saveInfo = function(updatedInfo) {
    service.info = updatedInfo;
  }
  service.deleteInfo = function() {
    service.info = {};
    service.favoriteDish = null;
  }
  service.saveFavoriteDish = function(menuItem) {
    service.favoriteDish = menuItem;
  }
  service.getFavoriteDish = function() {
    return service.favoriteDish;
  }
}

})();
