/*
 * Описание главного модуля приложения
*/

angular.module('app', [])
    .controller('Product', function ($filter) {
        this.brandsList = [
                   {"label":"Samsung","price":300,"rating":4,"sale": 80},
                   {"label":"Samsung","price":350,"rating":5},
                   {"label":"Sony","price":400,"rating":11, "sale": 30},
                   {"label":"Dell","price":250,"rating":16},
                   {"label":"Apple","price":298,"rating":78, "sale": 100},
                   {"label":"Nicon","price":520,"rating":56},
                   {"label":"Picon","price":985,"rating":84, "sale": 10},
                   {"label":"4U","price":282,"rating":41},
                   {"label":"Google","price":888,"rating":99, "sale": 50}
                ];
                this.brands = this.brandsList;

                this.priceFilter = function (){
                    this.brands = $filter('minmaxFilter')(this.brandsList,{min:this.minPrice, max:this.maxPrice})
                }
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

