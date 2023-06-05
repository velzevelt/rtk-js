/**
 * Имеется приложение (разработайте самостоятельно). 
 * Ему на вход подается 2 строки. 
 * На выходе приложение выдает число вхождений второй строки в первую.
 */

function strIntersect(string, subString) {

    // Преобразование в строку
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

console.assert(strIntersect("Ш", "Ш") === 1)
console.assert(strIntersect("", "") === 0)
console.assert(strIntersect("Жили-были три китайца: Як, Як-цедрак, Як-цедрак-цедрак-цедрони", "Як") === 3)


try{
    const str_1 = prompt("Первая строка", "")
    const str_2 = prompt("Строка для поиска", "")
    alert(strIntersect(str_1, str_2))
} catch(error) {
    alert(error)
}


