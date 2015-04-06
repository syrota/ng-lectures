/*
 * фильтр для списка товаров
 */
angular.module('app').filter('productFilterOnPrice', function(){
	'use strict';
        return function(list, params){
            var filterPrice = [];
            console.log(params)
            if(params.min != undefined && params.max != undefined ){
                for (var i = 0; i < list.length; i++){
                    if(list[i].price >= params.min && list[i].price <= params.max){
                        filterPrice.push(list[i]);
                    }
                }
            }
            else if(params.min != undefined && params.max == undefined){
                for (var i = 0; i < list.length; i++){
                    if(list[i].price >= params.min){
                        filterPrice.push(list[i]);
                    }
                }
            }
            else if(params.min == undefined && params.max != undefined){
                for (var i = 0; i < list.length; i++){
                    if(list[i].price <= params.max){
                        filterPrice.push(list[i]);
                    }
                }
            }
            else{
                filterPrice = list;
            }
            return filterPrice;
        };
    });


