/*
 *  Сервис для корзины
 */
angular.module('app').service('ShoppingCart', function () {

    'use strict';

    var cart = localStorage.getItem('cart');
    cart = cart ? JSON.parse(cart) : [];


    this.list = function () {
        return cart;
    };


    this.quantityOf = function (item) {

    };


    this.add = function () {

    };


    this.remove = function () {

    };


    this.removeAll = function () {

    };


});
