/*
 * Описание главного модуля приложения
*/

angular.module('app', ['ui.router', 'ngStorage', 'ui.bootstrap.pagination'])
    .config(function( $stateProvider, $urlRouterProvider ){
        $urlRouterProvider.otherwise("/");
        $stateProvider.state('app',{
            url: '/:page',
            views: {
                'products': {
                    templateUrl: 'products-list/products.html',
                    controller: 'ProductsListCtrl',
                    controllerAs: 'products'
                },
                'cart': {
                    templateUrl: 'shopping-cart/shopping-cart.html',
                    controller: 'CartCtrl',
                    controllerAs: 'cart'
                }
            }, 
            params: {
                page: 1
            }
        })
    })
    .service('Products', function( $http ){
        this.list = function(){
            return $http.get('/products.json');
        };
        return this;
    })
    .factory('Cart', function($rootScope, $localStorage) {
        var cart = {},
            price = 0,
            sale = 0;

        var $storage = $localStorage.$default({
            cartList: []
        });
        cart.addNew = function (product) {
            var prod = {
                name: product.label,
                amount: 1,
                price: product.price,
                sale: product.sale
            }
            $storage.cartList.push(prod);
        }
        cart.addOne = function (product) {
            for(var i = 0; i < $storage.cartList.length; i++){
                if(product.name == $storage.cartList[i].name){
                    $storage.cartList[i].amount++;
                }
            }
        }
        cart.deleteOne = function (product) {
            for(var i = 0; i < $storage.cartList.length; i++){
                if(product.name == $storage.cartList[i].name){
                    $storage.cartList[i].amount--;
                    if ($storage.cartList[i].amount == 0) {
                        $rootScope.$broadcast('removeFromCart', {name: $storage.cartList[i].name});
                        $storage.cartList.splice(i, 1);
                    }
                }
            }
        }
        cart.delete = function (product) {
            for(var i = 0; i < $storage.cartList.length; i++){
                if(product.name == $storage.cartList[i].name){
                    $rootScope.$broadcast('removeFromCart', {name: $storage.cartList[i].name});
                    $storage.cartList.splice(i, 1);
                }
            }
        }
        cart.list = function () {
            return $storage.cartList;
        }
        return cart;
    })
.filter('minmaxFilter', function () {
            return function(list, params){
                // console.log(list, params);
                        var filterPrice = [];
                        if (params.min != null && params.max != null ) {
                            for (var i = 0; i<list.length; i++){
                                if(list[i].price>= params.min && list[i].price <= params.max){
                                    filterPrice.push(list[i]);
                                }
                            }
                        } else if (params.min != null && params.max == null ){
                            for(var i = 0; i<list.length; i++){
                                if (list[i].price>=params.min) {
                                    filterPrice.push(list[i]);
                                };    
                            }
                        } else if(params.min == null && params.max != null) {
                            for(var i = 0; i<list.length; i++){
                                if (list[i].price<=params.max) {
                                    filterPrice.push(list[i]);
                                };    
                            }
                        } else {
                            filterPrice = list;
                        }
                        // console.log(filterPrice)
                        return filterPrice;
            }

    })
    .filter('stars', function () {
            var filledStar = '\ue006',
                emptyStar  = '\ue007';

            return function (rating) {

              var filled = Math.floor(rating / 20),
                  result = '';
              for (var i = 0; i<filled; i++) { result += filledStar }
              if (rating % 20 >= 15) { 
                    result += filledStar 
              } else if (rating % 20 >= 5) { 
                    result += emptyStar
              }
              return result //filledStar+...+emptyStar - it's string
            }
    })

