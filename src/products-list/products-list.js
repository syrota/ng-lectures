/*
 * Котроллер для списка товаров
 */
angular.module('app').config(function ($stateProvider) {

    'use strict';

    // Доступные параметры в url
    var urlParameters = ['order', 'by', 'page'];

    $stateProvider.state('products', {

        url: '/?' + urlParameters.join('&'),

        resolve: {

            productsList: function (ProductsList) {
                return ProductsList.list();
            }

        },

        views: {

            asideLeft: {
                templateUrl:  '/search-form/search-form.html',
                controller:   'SearchFormController',
                controllerAs: 'search'
            },

            content: {

                templateUrl: '/products-list/products-list.html',

                controller: function (productsList, $stateParams) {
                    this.orderBy = $stateParams.by ? ( ($stateParams.order || '') + $stateParams.by ) : '';
                    this.limit = +$stateParams.limit || 10;
                    this.items = productsList;
                },

                controllerAs: 'products'

            },

            asideRight: {

                templateUrl: '/shopping-cart/shopping-cart.html',

                controller: function (ShoppingCart) {
                    return ShoppingCart;
                },

                controllerAs: 'cart'
            }

        }


    });

});

