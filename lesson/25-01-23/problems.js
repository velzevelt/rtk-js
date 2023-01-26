// 2 функции факториал, квадратное уравнение

function factorial(n) {
    let res = NaN;
    
    if (Number.isInteger(n) && n > 0) {

        if (n == 0 || n == 1) {
            res = 1;
        } else {
            res = n * factorial(n - 1);
        }
        
    }

    return res;
}


// console.log(factorial(6));
// console.log(quad_equation(0, 0, 0))
console.log(sort_array([6, 8, 2, 0, 14]))


function quad_equation(a = 1, b = 1, c = 1) {
    
    if([a, b, c].some((val) => !Number.isFinite(val))) {
        console.error('Некорректные входные данные')
        console.error('Ожидаются только числовые значения');
        return NaN;
    }
    
    
    let res = NaN;
    if([a, b, c].some((val) => val == 0)) {
        
        if (a != 0 && c != 0 && b == 0) {
            t = -(c/a);
            if (t > 0) {
                t_root = Math.sqrt(t);
                res = [t_root, -t_root];
            }
        } else if (a != 0 && b != 0 && c == 0) {
            res = [0, -(b/a)];
        } else if (b == 0 && c == 0 && a != 0) {
            res = 0;
        }
        
    } else {
        
        const d = b ** 2 - 4 * a * c;
        if (d <= 0) {
            if (d == 0 && a != 0) {
                res = -b / 2 * a;
            } 
        } else {
            const d_root = Math.sqrt(d);
            const double_a = 2 * a;
            if (double_a != 0) {
                res = [
                    (-b + d_root) / double_a,
                    (-b - d_root) / double_a
                ];
            }
        }
    }



    return res;
}


//сравниваем текущий и следующий. следующий больше ? -> меняем местам
function sort_array(arr) {
    
    for(var i = 0; i < arr.length; i++) {

      // последний i на месте
      for(var j = 0; j < ( arr.length - i -1 ); j++) {
         
        // следующий больше ? -> меняем местам
        if(arr[j] > arr[j+1]) {
           
          // замена
          var temp = arr[j];
          arr[j] = arr[j + 1];
          arr[j+1] = temp;
        }
      }
    }
    return arr;
}