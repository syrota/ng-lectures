angular.module('root',[])

	.controller('ProductsListCtrl', function() {
	        'use strict';
	        this.phonesBase = [{
	                'phonesName': 'HTC',
	                price: 200,
	                rating: 91
	            }, {
	                'phonesName': 'Lenovo',
	                price: 100,
	                rating: 54
	            }, {
	                'phonesName': 'Ipont',
	                price: 500,
	                rating: 89
	            }, {
	                'phonesName': 'Samsung',
	                price: 250,
	                rating: 74
	            }, {
	                'phonesName': 'Nokia',
	                price: 100500,
	                rating: 100
	            }, {
	                'phonesName': 'Fly',
	                price: 0,
	                rating: 2
	            }, {
	                'phonesName': 'Shansung',
	                price: 73,
	                rating: 64
	            }

	        ];
	        this.sortType = '';
	        this.sortReverse = false;
	        this.search = 'phonesName';
	    })
	.controller('ShoppingCartCtrl', function() {
        'use strict';
        // this.Chosen = [];  // 
        this.Chosen = sessionStorage.getItem('cart'); // 
        this.Chosen = this.Chosen ? JSON.parse(this.Chosen) : [];
        this.inputBase = [];
        this.totalItems = 0;
        this.totalSumm = 0;
       


        this.buy = function(newphone, quantity) {

            this.inputBase.push(quantity);

            var isset = false;

            for (var i = quantity; i >= 1; i--) {
                for (var j in this.Chosen) {

                    if (this.Chosen[j].inbusket == newphone.phonesName) {
                        this.Chosen[j].counter++;
                        isset = true;
                    }
                } /* for j loop */

                if (isset == false) {

                    this.Chosen.push({
                        inbusket: newphone.phonesName,
                        price: newphone.price,
                        rating: newphone.rating,
                        counter: 1
                    });
                } /* if iss false end */
            }; /* for i loop */
            this.rating = this.Chosen[j].rating;
            this.summ = quantity * this.Chosen[j].price;
            this.totalItems += this.inputBase[j];
            this.totalSumm += this.summ;
            console.log();
            console.log();
            console.log();
            console.log();
           
            // LocasStorage

            // sessionStorage.setItem(this.Chosen[j].inbusket, [this.Chosen[j].price, this.inputBase]);

            sessionStorage.setItem('cart', JSON.stringify(this.Chosen));
            console.log(this.Chosen);
        }.bind(this);

        // Delete Add Items from basket
        this.del = function() {
            this.Chosen = [];

            this.totalItems = 0;
            this.totalSumm = 0;

        }.bind(this);

        this.dellast = function(toremove) {
            for (var k = 0; k <= this.Chosen.length; k++) {

                var item = this.Chosen[k];

                if (item.inbusket == toremove) {
                    var index = this.Chosen.indexOf(item);

                    this.Chosen.splice(index, 1);

                }
            }
        }.bind(this);

    })
 .filter('stars', function() {
        'use strict';
        var filledStar = '\ue006',
            emptyStar = '\ue007'
        return function(rating) {

            var filled = Math.floor(rating / 20),
                result = '';
            for (var i = 0; i < filled; i++) {
                result += filledStar
            }

            if (rating % 20 >= 15) {
                result += filledStar
            } else if (rating % 20 >= 5) {
                result += emptyStar
            }
            return result

        }
    })