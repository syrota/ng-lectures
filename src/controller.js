angular
.module('app')
	.controller('MyCtrl', function(){


			this.inCart = sessionStorage.getItem('cart');
			this.inCart = this.inCart ? JSON.parse(this.inCart) : [];
			this.sum = sessionStorage.getItem('sum');
			this.sum = this.sum ? JSON.parse(this.sum) : 0;
			this.productList = [
			{name: 'HTC', model: 'One', price: 200, rating: 90, description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam, voluptas neque consequatur consectetur soluta saepe.', img: 'img/phone.png'},
			{name: 'Iphone', model: 'One', price: 300, rating: 90, description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam, voluptas neque consequatur consectetur soluta saepe.', img: 'img/phone.png'},
			{name: 'Lenovo', model: 'One', price: 400, rating: 90, description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam, voluptas neque consequatur consectetur soluta saepe.', img: 'img/phone.png'},
			{name: 'Samsung', model: 'One', price: 500, rating: 90, description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam, voluptas neque consequatur consectetur soluta saepe.', img: 'img/phone.png'}
			];

			this.buy = function(quantity, item){

				var isset = false;
				for(var k = quantity; k >= 1; k--){

				for(var j in this.inCart){
					if(this.inCart[j].name == item.name){
						this.inCart[j].counter++;
						isset=true;
					}
				}
				if(isset == false){

				this.inCart.push({name: item.name, model: item.model, price: item.price, rating: item.rating, counter: 1});
				}
				
				}
				

				for(var i = 0; i < this.inCart.length; i++){
						this.sum +=  this.inCart[i].price;
									}
					
				sessionStorage.setItem('cart', JSON.stringify(this.inCart));
				sessionStorage.setItem('sum', JSON.stringify(this.sum));

				
			}
			this.addItem = function(quantity, item){
								
				for(var i in this.inCart){
					if(item.name == this.inCart[i].name){
						
					this.inCart[i].counter++;
					this.inCart[i].price += this.inCart[i].price * quantity;
					}
					console.log(this.inCart[i].name);
					console.log(this.inCart[i].price);
					console.log(this.inCart[i].counter);
				}
				
			}
			this.deleteAll = function(){
				this.inCart = [];
				this.sum = 0;
				sessionStorage.clear('cart');
				sessionStorage.clear('sum');
			}
			this.deleteLast = function(item){
				var index = this.inCart.indexOf(item);
				this.inCart.splice(index, 1);
			}


		
		})