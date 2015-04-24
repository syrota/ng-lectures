/**
 * Директива, которая выводит полноценный pagination.
 *
 * @example
 * <pagination items="arrayThatShouldBeDivided"></pagination>
 *
 */
angular.module('app').directive('pagination', function (PAGINATION, $state, $stateParams) {

    'use strict';

    /**
     * @param { String }    stateName
     * @param { Number }    current
     * @param { Number }    number
     * @returns {{ sref:string, number:number, isCurrent:boolean }}
     */
    function createSref(stateName, current, number) {

        // если это "пустышка" - сразу возвращаем null
        if (number === null) { return null }

        return {
            /**
             * Строка, которая используется для ui-sref.
             * Напомним, что в html она должна быть вот такой: ui-sref="products({page: 1})",
             * Мы подставляем название state и номер страницы из аргументов
             */
            sref: stateName + '({ page: ' + number + ' })',
            /**
             * @type Number
             * Номер страницы
             */
            number: number,
            /**
             * @type Boolean
             * true если страница - текущая
             */
            isCurrent: number === current
        };

    }


    /**
     * @param   { Number[] }  pageNumbers     Массив из номеров страниц. Например [1, null, 34, 35, 36, null, 60].
     *                                        Где null - пустышки, нужные что бы вставить ".." в UI
     * @param   { String }    stateName       Состояние, на которое будут ссылаться <a>
     * @param   { Number }    current         Текущая
     * @returns { { sref:string, number:number, isCurrent:boolean }[] }
     */
    function createSrefs(pageNumbers, stateName, current) {
        return pageNumbers.map(createSref.bind(null, stateName, current));
    }


    /**
     * Создаем массив из номеров страниц
     * @param   {number}    current
     * @param   {number}    total
     * @returns {Array}
     */
    function pagesList(current, total) {

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

        return pages;

    }


    return {

        templateUrl: '/ui-components/pagination.html',

        scope: {
            items: '='
        },

        link: function (scope) {

            var
                total = Math.ceil((scope.items && scope.items.length || 0) / PAGINATION.itemsPerPage),
                current = +($stateParams.page || 1),
                pages = pagesList(current, total);

            scope.pages = createSrefs(pages, $state.current.name, current);

            scope.prev = current > 1 ? createSref($state.current.name, current, current - 1) : null;
            scope.next = current < total ? createSref($state.current.name, current, current + 1) : null;

            scope.isFirst = current === 1;
            scope.isLast = current === total;

        }

    };

});