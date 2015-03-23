/*
 * Описание главного модуля приложения
 */

var eShopApp = angular.module('eShopApp', [
    'ngRoute',
    'ui.bootstrap',
    'productControllers',
    'cartControllers',
    'productsFactory',
    'rzModule'
]);

eShopApp.config(function($routeProvider) {
    $routeProvider.
        when('/', {
            templateUrl: 'productListMain.html',
            controller: 'CartListCtrl'
        }).
        otherwise({
            redirectTo: '/'
        });
});

eShopApp.filter('stars', function () {
    var filledStar = '\ue006',
        emptyStar = '\ue007';
    return function (rating) {
        var filled = Math.floor(rating / 20),
            result = '';
        for (var i = 0; i<filled; i++) { result += filledStar }

        if (rating % 20 >= 15) {
            result += filledStar;
        } else if (rating % 20 >= 5) {
            result += emptyStar
        }
        return result; //filledStar+filledStar+filledStar+filledStar+emptyStar;
    }});

eShopApp.filter('priceMax', function () {
    return function (items, max) {
        var filtered = [];
        for (var i = 0; i < items.length; i++) {
            var item = items[i];
            if (item.price<=max) {
                filtered.push(item);
            }
        }
        return filtered;
    };
});

eShopApp.filter('priceMin', function () {
    return function (items, min) {
        var filtered = [];
        for (var i = 0; i < items.length; i++) {
            var item = items[i];
            if (item.price<=min) {
                filtered.push(item);
            }
        }
        return filtered;
    };
});

eShopApp.filter('onlyProductsWithinPrice', function(){
    return function(products, minPrice, maxPrice){
        var filtered = [];
        angular.forEach(products, function(product){
            if(product.price >= minPrice && product.price <= maxPrice)
                filtered.push(product);
        });
        return filtered;
    };
});
