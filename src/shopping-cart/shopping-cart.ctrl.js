/*
 * Котроллер для корзины
 */
angular.module('app').controller('ShoppingCartController', function ($localStorage) {

    'use strict';
        this.$storage = $localStorage.$default({
            added: []
        });
        // this.$storage.added = [];
        this.total = 0;
        this.buy = function (item) {
           
            var isset = false;
            for (var i in this.$storage.added ){
                if( this.$storage.added[i].prod == item.label ){
                    this.$storage.added[i].counter++;
                    isset = true;
                }
            }
            if (isset === false) {
                this.$storage.added.push({
                    prod: item.label,
                    counter: 1
                });
            }
            this.total +=item.price;
            // console.log(this.$storage.added);
        }.bind(this);
        this.delete = function(index){
            if(this.$storage.added[index].counter >1){
                this.$storage.added[index].counter--;
            }
            else{
               this.$storage.added.splice(index, 1);
            }
            // this.total -=item.price;
             // console.log(this.delete.item);
             // console.log(this.$storage.added);
             // console.log(this.total);
        }.bind(this);
        this.deleteAll = function(){
            this.$storage.added.splice(0, this.$storage.added.length);
        }.bind(this);
    });

