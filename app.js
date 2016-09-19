(function () {
'use strict';

angular.module('LunchCheck', [])
.controller('LunchCheckController', LunchCheckController);

LunchCheckController.$inject = ['$scope'];
function LunchCheckController($scope) {
  $scope.items = "";
  $scope.displayMessageText = "";

  $scope.displayMessage = function () {
    if($scope.items != "") {
      var displayMessageValue = getMessageText($scope.items);
      $scope.displayMessageText = displayMessageValue;
    } else {
      $scope.displayMessageText ="Please enter data first";
    }
  };

    function getMessageText(items) {
      var stringSplit = items.split(',');
      var returString = "";
      if(stringSplit.length <= 3) {
        returString = "Enjoy!";
      } else {
        returString = "Too much!";
      }
      return returString;
    }
}

})();
