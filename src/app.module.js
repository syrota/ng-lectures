  /*
   * Описание главного модуля приложения
   */
   // "use strict";

  angular.module('app', [

      // зависимости модуля:
      // 1. роутер - https://github.com/angular-ui/ui-router
      // 'ui.router'
      'ui.router'
  ])


  .config(function($urlRouterProvider, $stateProvider) {

      // For any unmatched url, redirect to /state1
      $urlRouterProvider.otherwise('/');

      $stateProvider
          .state('/', {
              url: '/',
              views: {
                  'cart': {
                      templateUrl: 'shopping-cart/shopping-cart.html',
                      controller: 'ShoppingCartCtrl',
                      controllerAs: 'basket'
                  },
                  'list': {
                      templateUrl: 'products-list/products-list.html',
                      controller: 'ProductsListCtrl',
                      controllerAs: 'buyItem'
                  }
              }
          })
          .state('order',{
            url:'/order',
            views: {
                'cart': {
                    templateUrl: 'order/order-review.html',
                    controller: 'ShoppingCartCtrl',
                    controllerAs: 'basket'
                }
            }
          })

  })