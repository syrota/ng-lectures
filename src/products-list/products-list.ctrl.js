/*
 * Котроллер для списка товаров
 */
angular.module('app').controller('ProductsListCtrl', function ($rootScope, $stateParams, Products, Cart){

    'use strict';
    //code

    var vm = this;
        this.query = '';
        this.minPrice = null;
        this.maxPrice = null;
        vm.cartList = Cart.list();
    vm.$stateParams = $stateParams;
    this.init = function () {
        Products.list()
            .success(function (data) {
                vm.brands = data.result;
                for (var i  in vm.cartList) {
                    for (var k  in vm.brands) {
                        if ( vm.cartList[i].name == vm.brands[k].label) {
                            vm.brands[k].inCart = true;
                        };
                    };
                };
            });
    }
    this.buy = function (item) {
            item.inCart = true;
            Cart.addNew( item );
    };
    this.color = function (x) {
        var  Const = 255, R, G, B;
        R = Const;
        G = Const/100; G=G*x; G=G-(G%1); G=Const-G;
        B = Const/100; B=B*x; B=B-(B%1); B=Const-B;
        return "#" + ((1 << 24) + (R << 16) + (G << 8) + B).toString(16).slice(1);
    }
    $rootScope.$on('removeFromCart', function (event, args) {
        for(var i = 0; i < vm.brands.length; i++) {
            if(vm.brands[i].label == args.name){
                vm.brands[i].inCart = false;
            }
        }
    })
});
