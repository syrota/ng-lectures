

    // Создание объекта
    var cat = {};


    // Добавление свойства
    cat.color = 'black';
    cat['name'] = 'Tom';


    // Ключ/значения - обьект можно использовать как справочник
    var values = {
        'как на счёт киррилицы?': 'Можно и так',
        'function': 'yes',
        'delete': 'true'
    };
    console.log(values);

    // Проверка на существование свойства
    console.log(values.hasOwnProperty('delete'));



    // перечисление свойств
    for (var key in values) {
        if (values.hasOwnProperty(key)) {
            console.log(key, values[key]);
        }
    }
    // или
    Object.keys(values).forEach(function (key) {
        console.log(key, values[key]);
    });


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



    // Объекты - на самом деле ссылка
    var dog = cat;
    dog.color = 'white';
    console.log('cat=', cat, 'dog=', dog, 'cat==dog', cat == dog);


    // Еще у объектов есть .toString() .valueOf()
    var four = {
        toString: function () { return 'четыре' },
        valueOf: function () { return 4 }
    };
    var twenty = {
        toString: function () { return 'двадцать' },
        valueOf: function () { return 20 }
    };
    console.log(twenty + four);



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
