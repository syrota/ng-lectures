/*
 * Котроллер для списка товаров
 */
angular.module('app').controller('ProductsListController', function () {

    'use strict';

    //code


    this.added = [];
    this.buy = function ( item ) {
            item.inCart = true;

            var newObj = { prod: item.label, num: 1 },
                flag;

            if( this.added.length ){
                flag = true;
                for ( var i in this.added ) {
                    if( this.added[i].prod == item.label ) {
                        this.added[i].num++;
                        flag = false;
                    }
                }
                if ( flag ) {
                    this.added.push(newObj);
                };
            } else {
                this.added.push(newObj);
            }
    }.bind(this);

    this.color = function rgbToHex(x) {
        var  constanta = 255, r, g, b;
        r = 255;
        g = 255 / 100;  g = g * x; g = g - (g%1); g = 255 - g;
        b = 255 / 100;  b = b * x; b = b - (b%1); b = 255 - b;

        console.log(r,g,b,"---",x)    

        return "#" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
    }

	this.addProd = function ( a ) {
        this.added[a].num++;
    };
    this.minProd = function ( b ) {
        if ( this.added[b].num > 1 ) {
            this.added[b].num--
        } else {
            this.added.splice( b, 1)
        }
    };
    this.delProd = function ( c, item ) {
        this.added.splice( c, 1);
        console.log(item);

                for ( var i in item ) {
                    if( item[i].inCart ) {
                        console.log(i, item[i], item[i].inCart)
                        item[i].inCart = false;
                    }
                }

    };


});
