angular
		.module('app', ['ui.router'])
		.factory('MyService', function(){
			var myStore = new store();
			var myCart = new cart();

			return {
				store: StoreCart,
				cart: myCart
			}
		})
	
	