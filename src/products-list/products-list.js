/*
 * Котроллер для списка товаров
 */
angular.module('app').config(function ($stateProvider) {

    'use strict';

    $stateProvider.state('products', {

        url: '/?order&by&limit',

        resolve: {

            productsList: function (ProductsList) {
                return ProductsList.list();
            }

        },

        views: {

            content: {

                templateUrl: '/products-list/products-list.html',

                controller: function (productsList, $state, $stateParams) {
                    this.orderBy = $stateParams.by ? ( ($stateParams.order || '') + $stateParams.by ) : '';
                    this.limit = +$stateParams.limit || 10;
                    this.items = productsList;
                },

                controllerAs: 'products'

            },

            aside: {

                templateUrl: '/shopping-cart/shopping-cart.html',

                controller: function (ShoppingCart) {
                    return ShoppingCart;
                },

                controllerAs: 'cart'
            }

        }


    });

});

