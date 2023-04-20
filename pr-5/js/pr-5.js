class Factorial {
    constructor(n) {
        return this.calculate(n)
    }
    
    calculate(n) {
        res = NaN;
        if (Number.isInteger(n) && n > 0) {
            if (n === 0 || n === 1) {
                res = 1;
            } else {
                res = n * Factorial(n - 1)
            }
        } else {
            throw new Error('Invalid factorial')
        }
        
        return res; 
    } 
}

const fac = Factorial(3)

class QuadEquation { }



// function factrorial($n)
// {
//     res = false;
//     if (is_int($n) and $n > 0) {

//         if ($n == 0 or $n == 1) {
//             res = 1;
//         } else {
//             res = $n * factrorial($n - 1);
//         }
//     }

//     return res;
// }