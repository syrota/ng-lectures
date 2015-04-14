angular.module('app').controller('CartCtrl', function ( Cart ){

		this.cart = Cart.list();
		
	    this.addProd = function ( item ) {
	        Cart.addOne ( item );
	    };
	    this.minProd = function ( item ) {
	        Cart.deleteOne ( item );
	    };
	    this.delProd = function ( item ) {
	        Cart.delete ( item );
	    };
});