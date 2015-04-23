/*
 * Котроллер для формы поиска
 */
angular.module('app').controller('SearchFormController', function (productsList, $stateParams) {

    'use strict';

    this.productsMaxPrice = productsList.getMaxPrice();

    this.maxPrice = +$stateParams.maxPrice || this.productsMaxPrice;
    this.minPrice = +$stateParams.minPrice || 0;

});
