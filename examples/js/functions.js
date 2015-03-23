
    // Функции
    boom(); // сработает, т.к. функция будет создана до выполнения кода
    function boom() {
        console.log('BOOM!');
    }


    //boooom();
    var boooom = function() {
        console.log('BOO-OOM!');
    };


    // Функции - тоже объект Function -> Object
    boom.boooom = boooom;
    boom();
    boom.boooom();
