/**
 * Created by DmitryL on 3/21/2015.
 */
angular.module('productsFactory', [])
    .factory('products', function($http){
        return {
            list: function (callback){
                $http({
                    method: 'GET',
                    url: 'data/products.json',
                    cache: true
                }).success(callback);
            }};
    });