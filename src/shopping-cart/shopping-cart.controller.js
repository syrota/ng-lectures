
angular.module('app').controller('ShoppingCartController', function (ShoppingCart) {

    'use strict';

    // возвращая ShoppingCart мы просто делаем доступными методы сервиса корзины в наших html-шаблонах
    return ShoppingCart;

});
