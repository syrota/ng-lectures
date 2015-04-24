angular.module('app').config(function ($stateProvider) {

    'use strict';

    // Доступные параметры в url
    var urlParams = ['order', 'by', 'page'];

    $stateProvider.state('products', {

        url: '/?' + urlParams.join('&'),

        // ProductsList.list() возвращает Promise,
        // resolve - ожидает пока промис не перейдет в статус resolved
        // в итоге, подключая как зависимость productsList в контроллере,
        // мы получаем уже сформированный массив продуктов
        resolve: {
            productsList: function (ProductsList) {
                return ProductsList.list();
            }
        },

        views: {

            content: {
                /**
                 * @param {ProductsListClass}   productsList
                 * @param {{order:string, by:string, page:string }}  $stateParams
                 */
                controller: function (productsList, $stateParams) {
                    this.orderBy = $stateParams.by ? ( ($stateParams.order || '') + $stateParams.by ) : '';
                    this.page = +($stateParams.page || 1);
                    this.items = productsList;
                },
                controllerAs: 'products',
                templateUrl: '/products-list/products-list.html'
            },

            asideLeft: {
                templateUrl:  '/search-form/search-form.html',
                controller:   'SearchFormController',
                controllerAs: 'search'
            },

            asideRight: {
                templateUrl: '/shopping-cart/shopping-cart.html',
                controller: 'ShoppingCartController',
                controllerAs: 'cart'
            }

        }

    });

});

