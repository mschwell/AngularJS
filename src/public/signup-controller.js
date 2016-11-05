(function () {
"use strict";

angular.module('public')
.controller('SignupController', SignupController);

SignupController.$inject = ['InfoService','ApiPath','$http'];
function SignupController(InfoService,ApiPath,$http) {
  var ctrl = this;
  var service = InfoService;
  ctrl.info = angular.copy(service.getInfo());
  ctrl.favoriteDishError = null;
  var signedUp = ctrl.info.surname;

  ctrl.signup = function() {
    if (ctrl.info.surname && ctrl.info.email && ctrl.info.phoneMobile && ctrl.info.favoriteDish) {
      var url = ApiPath + '/menu_items/' + ctrl.info.favoriteDish.toUpperCase() + '.json';
      var promise = $http({
        method: 'GET',
        url: url
      });
      promise.then(function (response) {
        service.saveInfo(ctrl.info);
        service.saveFavoriteDish(response.data);
        signedUp = true;
      })
      .catch(function (error) {
        ctrl.favoriteDishError = 'No such menu number exists';
      })



    }
  }
  ctrl.hasSignedUp = function() {
    return signedUp;
  }
}

})();
