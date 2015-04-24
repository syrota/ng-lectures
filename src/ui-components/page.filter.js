angular.module('app').filter('page', function (PAGINATION) {

    'use strict';

    return function (array, page) {

        if (!array || !array.length) {
            return [];
        }

        page = page || 1;

        var start = PAGINATION.itemsPerPage * (page - 1),
            end = Math.min( start + PAGINATION.itemsPerPage, array.length - 1 );

        return array.slice(start, end);

    };

});
