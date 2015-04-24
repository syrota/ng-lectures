angular.module('app')
    .filter('colorFade', function () {


        var HUGE_SALE_COLOR = '#ff0000',
            SOFT_SALE_COLOR = '#ccc',
            HUGE_SALE = 50,
            SOFT_SALE = 3;


        /**
         * @param   {string}    hex color ('#aaa', 'AAA', '12FF00', '#Aa30Fc', '666' - valid colors)
         * @returns {number[]}  an array with 3 items, representing the color in RGB
         */
        function hexToRGB(hex) {

            // '#xxxxxx' -> 'XXXXXX'
            var tmp = hex.replace('#', '').toUpperCase();

            // 'ABC' -> 'AABBCC'
            if (tmp.length == 3) {
                // use array method for string
                tmp = Array.prototype.map.call(tmp, function (char) {
                    // double a char
                    return '' + char + char;
                })
                    // join back to string
                    .join('');
            }

            // Validate
            if (tmp.length !== 6 || !/^[0-9A-F]+$/) {
                throw Error('Invalid color format');
            }

            // 'AABBCC' -> [ 'AA', 'BB', 'CC' ] -> [ 170, 187, 204 ]
            return [tmp.substr(0, 2), tmp.substr(2, 2), tmp.substr(4, 2)].map(function (hex) {
                return parseInt(hex, 16);
            });

        }


        var HUGE_SALE_RGB = hexToRGB(HUGE_SALE_COLOR),
            SOFT_SALE_RGB = hexToRGB(SOFT_SALE_COLOR);


        /**
         * Makes sure that (SOFT_SALE <= sale <= HUGE_SALE)
         */
        function limitSale(sale) {
            return Math.min(Math.max(sale, SOFT_SALE), HUGE_SALE);
        }


        function getSaleColor(sale) {

            /*
             soft - 0%
             huge - 100%
             sale = (sale-soft) / (huge-soft) %
             */
            var percentage = (limitSale(sale) - SOFT_SALE) / (HUGE_SALE - SOFT_SALE);

            return SOFT_SALE_RGB.map(function (softColor, index) {

                var hugeColor = HUGE_SALE_RGB[index];

                /*
                 hugeColor-softColor  =  100%
                 (hugeColor-softColor) * percentage - our sale
                 softColor - min value
                 */
                return Math.round((hugeColor - softColor) * percentage + softColor);

            });

        }


        function toCSS(rgb) {
            return 'rgb(' + rgb.join(',') + ')';
        }


        // actually filter
        return function (sale) {
            return toCSS(getSaleColor(sale));
        };

    });
