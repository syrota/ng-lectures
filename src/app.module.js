/*
 * Описание главного модуля приложения
 */

angular.module('app', [])
    .controller('Product', function () {
        this.brands = [
            { label: 'Samsung', cost: '200' },
            { label: 'Sony', cost: '200' },
            { label: 'Dell', cost: '200' },
            { label: 'Apple', cost: '200' }
        ];
    })
    .controller('ShoppingCart', function () {
        this.added = [];
        this.buy = function ( item ) {

            var newObj = { prod: item.label, num: 1 },
                flag;

            // this.added.push(newObj);

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
        this.delProd = function ( c ) {
            this.added.splice( c, 1);
        };

    })
