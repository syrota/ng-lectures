angular.module('app')
.config(function($stateProvider){


$state.Provider
	.state(
		'buyItem',{
			url: '/',
			tamplateUrl: '/products-list/products-list.html',
			controller: 'ProductsListCtrl',
			controllerAs: 'buyItem'
		}
		)
	
})