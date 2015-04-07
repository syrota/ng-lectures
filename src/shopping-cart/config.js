angular.module('root')
.config(function($stateProvider){

	$state.Provider
	.state(
		'basket', {
			url: '/',
			tamplateUrl: '/shopping-cart/shopping-cart.html',
			controller: 'ShoppingCartCtrl',
			controllerAs: 'basket'
		}

		)
})