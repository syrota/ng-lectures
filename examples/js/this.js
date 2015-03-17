
    // 1. Глобальная область видимости
    // Когда мы используем this в глобальной области, она будет просто ссылаться на глобальный объект.
    console.log('1', this);

    //2. Вызов функции
    function testThis () {
        console.log('2', this);
    }
    testThis();
    //Тут this также ссылается на глобальный объект.
    //ES5 Замечание: В strict-режиме теряется понятие глобальности, поэтому в этом случае this будет иметь значение undefined.

    //3. Вызов метода
    var testMethod = {
        value: '3. I am object property',
        method: function () {
            console.log(this.value);
        }
    };
    testMethod.method();
    //В данном примере this ссылается на testMethod.


    //4. Вызов конструктора
    var TestConstructor = function () {
        console.log(this);
    };
    new TestConstructor();
    //Если перед вызовом функции присутствует ключевое слово new,
    // то данная функция будет действовать как конструктор.
    // Внутри такой функции this будет указывать на новосозданный Object.
