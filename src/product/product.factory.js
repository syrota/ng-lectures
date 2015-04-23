
angular.module('app').factory('Product', function (ShoppingCart) {

    /**
     * @class Product
     */
    var Product = function (data) {

        // копируем все свойства
        Object.keys(data).forEach(function (key) {
            this[key] = data[key];
        }, this);

    };

    Product.prototype.buy = function (quantity) {
        quantity = quantity || 1;
        ShoppingCart.add(this, quantity);
    };

    Product.prototype.unBuy = function (quantity) {
        quantity = quantity || 1;
        ShoppingCart.remove(this, quantity);
    };

    Product.prototype.getShoppingCartQuantity = function () {
        return ShoppingCart.getQuantity(this);
    };

    // Фабрика
    var productFactory = function (data) {
        return new Product(data);
    };

    // Метод для проверки типа
    productFactory.isInstance = function (object) {
        return object instanceof Product;
    };

    return productFactory;

});