/**
 * Имеется приложение (разработайте самостоятельно). 
 * Ему на вход подается 2 строки. 
 * На выходе приложение выдает число вхождений второй строки в первую.
 */


function strIntersect(string, subString) {

    // Проверка аргументов
    [string, subString].forEach( (arg) => {
        switch (typeof arg) {
            case "undefined":
            case "null":
            case "object": throw new TypeError(`${arg} is ${typeof arg} and cannot be properly casted to string`);
            case "string": break;
            default: console.warn(`${arg} is not a string, but it was auto casted`);
        }
    } );

    // Преобазование аргументов в строку
    string += "";
    subString += "";

    if (subString.length <= 0) return 0;

    let n = 0;
    let pos = 0;
    let step = subString.length;

    while (true) {
        pos = string.indexOf(subString, pos);
        if (pos >= 0) {
            n++;
            pos += step;
        } else break;
    }
    return n;
}


function assertException(func, exception) {
    try {
        func();
        console.error(`Expected exception "${exception}" was not raised`)
    } catch (error) {
        if (!(error instanceof exception))
            console.error(`Expected exception "${exception}" was not raised`)
    }
}


console.assert(strIntersect("Ш", "Ш") === 1);
console.assert(strIntersect("", "") === 0);
console.assert(strIntersect("Жили-были три китайца: Як, Як-цедрак, Як-цедрак-цедрак-цедрони", "Як") === 3);
console.assert(strIntersect("", "123") === 0);
console.assert(strIntersect("123", "") === 0);
console.assert(strIntersect(111, 1) === 3);
console.assert(strIntersect(111, '1') === 3);
console.assert(strIntersect('111', 1) === 3);


assertException( () => strIntersect(undefined, undefined), TypeError );
assertException( () => strIntersect(null, null), TypeError );
assertException( () => strIntersect(1, null), TypeError );
assertException( () => strIntersect(null, 1), TypeError );
assertException( () => strIntersect([], []), TypeError );
assertException( () => strIntersect(['a', 'b', 'c'], ['a', 'b', 'c']), TypeError );


// const str_1 = prompt("Первая строка", "")
// const str_2 = prompt("Строка для поиска", "")
// alert(strIntersect(str_1, str_2))



