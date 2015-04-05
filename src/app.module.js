/*
 * Описание главного модуля приложения
 */
angular.module('app', ['ngStorage' , 'ui.router'])
  .controller('Product', function () {
    'use strict';

    })

  .config(function ( $urlRouterProvider, $stateProvider ){
  	'use strict';

  	$urlRouterProvider.otherwise('/');
  	$stateProvider
  		.state('app',{
	  		url  : '/',
	  		views : {
	  			'prodView' : {
	  				templateUrl : '/products-list/products.html',
	  				controller  : 'ProductsListController',
	  				controllerAs: 'products'
	  			},
	  			'cartView' : {
	  				templateUrl : 'shopping-cart/cart.html',
	  				controller  : 'ShoppingCartController',
	  				controllerAs: 'cart'
	  			}
	  		}
	   	})
	   	.state('order', {
	     	url: "/order",
	     	views: {
	       		'prodView' : { 
	       			templateUrl : '/confirm-order/order.html'
	       		}
	      }
	    })
  });
