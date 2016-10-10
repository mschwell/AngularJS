(function () {
'use strict';

angular.module('MenuApp')
.config(RoutesConfig);

RoutesConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
function RoutesConfig($stateProvider, $urlRouterProvider) {

  // Redirect to home page if no other URL matches
  $urlRouterProvider.otherwise('/');
  //
  //*** Set up UI states ***
  $stateProvider
  //
  // Home page
  .state('home', {
    url: '/',
    templateUrl: 'src/menuapp/templates/home.template.html'
  })

  .state('mainList', {
    url: '/categories',
    templateUrl: 'src/menuapp/templates/main-categories.template.html',
    controller: 'MainCategoriesController as mainList'
  })

  .state('itemDetail', {
    url: '/menuCategory/{categoryID}',
    templateUrl: 'src/menuapp/templates/items.template.html',
    controller: 'ItemDetailController as itemdetail',
    resolve: {
      item: ['$stateParams','MenuDataService',
          function ($stateParams, MenuDataService) {
            return MenuDataService.getItemsForCategory($stateParams.categoryID)
            .then(function (response) {
              return response.data;
            });
          }]
    }
  })
}

})();
