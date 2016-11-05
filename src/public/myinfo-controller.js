(function () {
"use strict";

angular.module('public')
.controller('MyInfoController', MyInfoController);

MyInfoController.$inject = ['InfoService'];
function MyInfoController(InfoService) {
  var ctrl = this;
  var service = InfoService;
  ctrl.info = service.getInfo();
  ctrl.favoriteDish = service.getFavoriteDish();

  ctrl.unsubscribe = function() {
    service.deleteInfo();
    ctrl.info = service.getInfo();
  }
  ctrl.hasSignedUp = function() {
    return ctrl.info.surname;
  }
}

})();
