/*
 * Описание главного модуля приложения
 */
angular.module('app', ['ngStorage' , 'ui.router'])
  .controller('Product', function () {
    'use strict';

    })

  .config(function ( $urlRouterProvider ){
  	'use strict';

  	$urlRouterProvider.otherwise('/test');
  });
