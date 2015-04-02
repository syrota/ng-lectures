/*
 * Котроллер для списка товаров
 */
angular.module('app')
    //     .config(function($stateProvider, $urlRouterProvider){
    //     $urlRouterProvider.otherwise("/");
        
    // })

    .config(function($stateProvider) {
        'use strict';
            $stateProvider.state('testState',{
                url : '/testState',
                templateUrl: 'products-list/products.html',
                controller: 'ProductsListController',
                controllerAs: 'products'
        })
    })
    .service('Products', function( $http ){
        'use strict';
            this.list = function(){
                return $http.get('/products.json');
            };

            return this;
    })

    .controller('ProductsListController', function (Products, $filter) {
        'use strict';

            var self = this;
            // this.brandsList = [];
            // this.brands = this.brandsList;
            this.priceFilter = function(){
                // console.log(this.maxPrice)
               this.brands = $filter('productFilterOnPrice')(this.brandsList,{min:this.minPrice , max:this.maxPrice});
            };
            
             this.init = function () {
                Products.list()
                    .success(function (data) {
                        self.brandsList = data.result;
                        self.brands = angular.copy(self.brandsList);
                    });
                };
})


