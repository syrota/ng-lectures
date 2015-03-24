angular.module('root', [])
.controller('Buy',function(){

	this.Chosen =[];
	this.inputBase = [];

	this.buy = function(newphone, quantity ){

		this.inputBase = angular.copy(quantity);

		var isset = false;

		for(var i = quantity; i > 0; i--){
		for(var j in this.Chosen){

			if(this.Chosen[j].inbusket == newphone.phonesName){
				this.Chosen[j].counter++;
				isset = true;		

				console.log(this.Chosen[j].price);
			}
		} /* for j loop */

		if(isset == false){

					this.Chosen.push({inbusket: newphone.phonesName, price: newphone.price, rating: newphone.rating, counter: 1});
		}  /* if iss false end */
		}; /* for i loop */
	// console.log(this.Chosen);
	// console.log(this.inputBase);
	this.rating = this.Chosen[j].rating;
	console.log(quantity);

	this.summ = quantity * this.Chosen[j].price;
	console.log(this.summ);
	}.bind(this);
	
// Delete Add Items
	this.del = function(){
		this.Chosen =[];
				
	}.bind(this);
	
	this.dellast = function(toremove){
		for(var k = 0; k <= this.Chosen.length; k++){

			var item = this.Chosen[k];
			

			if(item.inbusket == toremove){
				var index = this.Chosen.indexOf(item);

				console.log(index);
				

				this.Chosen.splice(index, 1);

				console.log(this.inputBase);

			}
		}
	}.bind(this);

})