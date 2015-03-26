/*
 * Котроллер для корзины
 */
angular.module('app').controller('ShoppingCartController', function () {

    'use strict';
        this.added = [];
        this.total = 0;
        this.buy = function (item) {
           
            var isset = false;
            for (var i in this.added ){
                if( this.added[i].prod == item.label ){
                    this.added[i].counter++;
                    isset = true;
                }
            }
            if (isset === false) {
                this.added.push({
                    prod: item.label,
                    counter: 1
                });
            }
            this.total +=item.price;
            // console.log(this.added);
        }.bind(this);
        this.delete = function(index){
            if(this.added[index].counter >1){
                this.added[index].counter--;
            }
            else{
               this.added.splice(index, 1);
            }
            // console.log("index -", index)
            // console.log('counter -', this.added[index].counter);
        }.bind(this);
        this.deleteAll = function(){
            this.added.splice(0, this.added.length);
        }.bind(this);
    });

