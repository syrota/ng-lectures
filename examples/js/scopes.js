

// 1.

var x = 1;
console.log('1. x=', x);

if (2 > 1) {
    var x = 2;
    console.log('2. x=', x);

}
console.log('3. x=', x);


// 2.

function f() {
    var x = 10;
    console.log('4. x=', x);
}
f();

console.log('5. x=', x);


// 3.

function g() {
    x = 20;
    console.log('6. x=', x);
}
g();

console.log('7. x=', x);


// 4.

function complex() {
    var x = 0;
    return function () {
        console.log('x=', x++);
    };
}


// 5.

var smth = complex();
smth();
smth();


// 6.

var smthMore = (function () {
    var x = 0;
    return function () {
        console.log(x++);
    };
})();

smthMore();
smthMore();


(function () {

    'use strict';

    // variables


})();
