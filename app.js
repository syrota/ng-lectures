
    "use strict";

    // Создание объекта
    //var cat = {};
    // Добавление свойства
    //cat.color = 'black';
    // Вся суть инкапсуляции
    var girl = {
        // свойства
        lovedProperty: 'color',
        lovedValue: 'white',
        // методы
        likes: function (animal) {
            return animal[this.lovedProperty] === this.lovedValue
        }
    };


    var Animal = function (color) {
        this.color = color;
    };

    Animal.prototype.run = function () {
        console.log('ran');
    };

    var dog = new Animal('black');
    var cat = new Animal('white');
    //dog.run();

    for (var i in dog) {
        if (dog.hasOwnProperty(i)) {
            //console.log(i);
        }
    }

    var arr = [1,2,3];
    //arr.forEach(function (i, index) {
    //    console.log(i, index);
    //});
    console.log(arr.reduce(function (result, value, index, array) {
        return result - value
    }, 4));


    //console.log(arr[2]);


    //console.log('She likes the cat:', girl.likes(cat));
    //console.log('She likes the dog:', girl.likes(dog));
    //console.log('cat=', cat, 'dog=', dog, 'cat==dog', cat == dog);



    // Удаление свойств
    var testDelete = {
        one: 1,
        two: 2,
        three: 3
    };
    //console.log('before', testDelete);
    testDelete.one = null;
    testDelete.two = undefined;
    delete testDelete.three;
    //console.log('after', testDelete);


    // Обьект как справочник
    var transform = {
        'как на счёт киррилицы?': 'Можно и так',
        'function': 'yes',
        'delete': 'true'
    };
    //console.log(transform);

    // Проверка на существование
    //console.log(transform.hasOwnProperty('delete'));

    // Еще у объектов есть .toString() .valueOf()
    var four = {
        //toString: function () { return 'четыре' },
        //valueOf: function () { return 4 }
    };
    var twenty = {
        //toString: function () { return 'двадцать' },
        //valueOf: function () { return 20 }
    };
    //console.log(twenty + four);





    // 1. Глобальная область видимости
    // Когда мы используем this в глобальной области, она будет просто ссылаться на глобальный объект.
    //console.log('1', this);

    //2. Вызов функции
    function testThis () {
        console.log('2', this);
    }
    //testThis();
    //Тут this также ссылается на глобальный объект.
    //ES5 Замечание: В strict-режиме теряется понятие глобальности, поэтому в этом случае this будет иметь значение undefined.

    //3. Вызов метода
    var testMethod = {
        value: '3. I am object property',
        method: function () {
            console.log(this.value);
        }
    };
    //testMethod.method();
    //В данном примере this ссылается на testMethod.


    //4. Вызов конструктора
    var TestConstructor = function () {
        //console.log(this);
    };
    new TestConstructor();
    //Если перед вызовом функции присутствует ключевое слово new,
    // то данная функция будет действовать как конструктор.
    // Внутри такой функции this будет указывать на новосозданный Object.



    // Функции
    //boom(); // сработает, т.к. функция будет создана до выполнения кода
    function boom() {
        console.log('BOOM!');
    }

    //boooom();
    var boooom = function() {
        console.log('BOO-OOM!');
    };


    // Функции - тоже объект Function -> Object
    //boom.boooom = boooom;
    //boom();
    //boom.boooom();

























    //

    // ======


    // ======




