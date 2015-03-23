/*
 * Описание главного модуля приложения
 */

angular.module('app', [])
    .controller('Product', function () {
        this.brands = [
                   {"label":"Samsung","price":300,"sale":true,"rating":4},
                   {"label":"Sony","price":400,"sale":true,"rating":11},
                   {"label":"Dell","price":250,"sale":true,"rating":16},
                   {"label":"Apple","price":298,"sale":true,"rating":78},
                   {"label":"Nicon","price":520,"sale":true,"rating":56},
                   {"label":"Picon","price":985,"sale":true,"rating":84},
                   {"label":"4U","price":282,"sale":true,"rating":41},
                   {"label":"Google","price":888,"sale":false,"rating":99}
                ];
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

    this.disBuy = function (e) {
        return false 
    };

})
