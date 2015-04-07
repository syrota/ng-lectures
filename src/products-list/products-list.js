/*
 * Котроллер для списка товаров
 */
angular.module('app').config(function ($stateProvider) {

    'use strict';

    $stateProvider.state('products', {

        url: '/?order&by',

        templateUrl: '/products-list/products-list.html',

        resolve: {

            cart: function (ShoppingCart) {
                return ShoppingCart.list();
            },

            productsList: function (ProductsList) {
                return ProductsList.list();
            }
        },

        controller: function (productsList, $stateParams, cart) {

            this.orderBy = $stateParams.orderBy;
            this.order = $stateParams.order;
            this.items = productsList;
            this.cart = cart;

        },

        controllerAs: 'products'

    });

});

