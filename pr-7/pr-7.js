/**
 * Имеется приложение (разработайте самостоятельно). 
 * Ему на вход подается 2 строки. 
 * На выходе приложение выдает число вхождений второй строки в первую.
 */


const str_1 = "Шла Саша по шоссе и сосала сушку"
const str_2 = "ш"

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
            ++n;
            pos += step;
        } else break;
    }
    return n;
}


