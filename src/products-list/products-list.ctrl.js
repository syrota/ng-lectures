/*
 * Котроллер для списка товаров
 */
var productControllers = angular.module('productControllers', []);


productControllers.controller('ProductListCtrl',['$scope', '$filter', 'products', function ($scope, $filter, products){
    'use strict';
    products.list(function(products) {
        $scope.products = products;
    });


    var orderBy = $filter('orderBy');

    $scope.orderByKey = function(predicate, reverse) {
        $scope.products = orderBy($scope.products, predicate, reverse);
    };

    $scope.orderByKey('-price',false);

    $scope.priceSlider = {
        min: 0,
        max: 300
    };
}]);

