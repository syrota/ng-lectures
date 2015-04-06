angular.module('app')
    .service('ProductsList', function ($http) {

        'use strict';

        this.list = function () {

            return $http
                .get('products-list/products-list.json')
                .then(function (response) {
                    return response.data;
                });

        };

    });
