(function () {
'use strict';

angular.module('LunchCheck', [])
.controller('LunchCheckController', LunchCheckController);

LunchCheckController.$inject = ['$scope'];
function LunchCheckController($scope) {
  $scope.items = "";
  $scope.displayMessageText = "";

  $scope.displayMessage = function () {
    var displayMessageValue = getMessageText($scope.items);
    $scope.displayMessageText = displayMessageValue;
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
