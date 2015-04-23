angular.module('app').directive('pagination', function (PAGINATION, $state, $stateParams) {

    'use strict';

    /**
     * @param { String }    stateName
     * @param { Number }    current
     * @param { Number }    number
     * @returns {Array}
     */
    function createSref(stateName, current, number) {
        return {
            sref: stateName + '({ page: ' + number + ' })',
            number: number,
            isCurrent: number === current
        };
    }

    /**
     * @param { Number[] }  pageNumbers
     * @param { String }    stateName
     * @param { Number }    current
     * @returns {Array}
     */
    function createSrefs(pageNumbers, stateName, current) {
        return pageNumbers.map(createSref.bind(null, stateName, current));
    }


    return {

        templateUrl: '/ui-components/pagination.html',

        scope: {
            items: '@'
        },

        link: function (scope) {

            var
                total = Math.ceil((scope.items && scope.items.length || 0) / PAGINATION.itemsPerPage),
                current = +($stateParams.page || 1);

            var pages = [];

            // формируем список страниц
            for (var i = 1; i <= total; i++) {
                if (
                    i === 1 || // первая
                    i === total || // последняя
                    i >= current - 2 && i <= current + 2 // текущая +- 2
                ) {
                    pages.push(i);
                }
            }


            scope.pages = createSrefs(pages, $state.current.name, current);

            scope.prev = current > 1 ? createSref($state.current.name, current, current - 1) : null;
            scope.next = current < total ? createSref($state.current.name, current, current + 1) : null;

            scope.isFirst = current === 1;
            scope.isLast = current === total;

        }

    };

});