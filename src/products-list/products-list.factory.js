
angular.module('app').factory('productsListFactory', function (Product) {

    /**
     * @class ProductsListClass
     * @extends Array
     * @param data
     * @constructor
     */
    var ProductsList = function (data) {

        // если data не пустая
        if (data && data.length) {

            //пробегаемся по массиву
            this.push.apply(this, data.map(Product) );

        }

    };

    ProductsList.prototype = [];

    ProductsList.prototype.getMaxPrice = function () {
        return this.reduce(function (max, /** Product */item) {
            return (item.price > max) ? item.price : max;
        }, 0);
    };


    // Фабрика
    var productsListFactory = function (data) {
        return new ProductsList(data);
    };

    // Метод для проверки типа
    productsListFactory.isInstance = function (object) {
        return object instanceof ProductsList;
    };

    return productsListFactory;

});