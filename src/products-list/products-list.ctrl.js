/*
 * Котроллер для списка товаров
 */
angular.module('app').controller('ProductsListController', function ($filter) {
    'use strict';
        this.brandsList = [
            {
                label: 'Samsung',
                price: 300,
                sale:true,
                skidka: 0.1
            },
            {
                label: 'Sony',
                price: 400,
                sale:true,
                skidka: 0.2
            },
            {
                label: 'Dell',
                price: 250,
                sale:true,
                skidka: 0.3
            },
            {
                label: 'Apple',
                price: 298520,
                sale:true,
                skidka: 0.4
            },
            {
                label: 'NIcon',
                price: 298520,
                sale:true,
                skidka: 0.5
            },
            {
                label: 'Picon',
                price: 298520,
                sale:true,
                skidka: 0.6
            },
            {
                label: 'notNow',
                price: 298520,
                sale:true,
                skidka: 0.7
            },
            {
                label: 'faceboock',
                price: 298520,
                sale:true,
                skidka: 1
            },
            {
                label: 'real Apple',
                price: 298520,
                sale:false,
                skidka: 3
            }
        ];
        this.brands = this.brandsList;
        this.priceFilter = function(){
            console.log(this.maxPrice)
           this.brands = $filter('productFilterOnPrice')(this.brandsList,{min:this.minPrice , max:this.maxPrice});
        };
});
