/*
 *  Сервис для корзины
 */
angular.module('app').service('ShoppingCart', function () {

    'use strict';

    this.items = localStorage.getItem('cart');
    this.items = this.items ? JSON.parse(this.items) : [];


    this.indexOfProduct = function (product) {

        var index;

        if ( this.items.some(function (item, i) {
            if (item.product.id === product.id) {
                index = i;
                return true;
            }
        }) ) {
            return index;
        }

        return -1;

    };


    this.getItem = function (product) {

        var index = this.indexOfProduct(product);

        if (index === -1) {
            this.items.push({
                product: product,
                quantity: 0
            });
            index = this.items.length - 1;
        }

        return this.items[index];

    };


    this.add = function (product, quantity) {
        this.getItem(product).quantity += quantity || 1;
        this.saveState();
    };

    this.getQuantity = function (product) {
        var index = this.indexOfProduct(product);
        return (index === -1)  ?  0  :  this.items[index].quantity;
    };


    this.saveState = function () {
        localStorage.setItem('cart', JSON.stringify(this.items) );
    };


    this.remove = function (product, quantity) {

        quantity = quantity || 1;
        var index = this.indexOfProduct(product);

        if (index === -1) return;

        this.items[index].quantity -= quantity;

        if (this.items[index].quantity <= 0) {
            this.items.splice(index, 1);
        }

        this.saveState();

    };


    this.clean = function () {
        this.items = [];
        this.saveState();
    };


});
