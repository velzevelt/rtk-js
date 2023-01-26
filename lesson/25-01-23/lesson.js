// alert('Hello world!')
// console.log('Hello world!')

//boolean


// const $a_bool = false
// const $b_bool = true

// Number
// let a = 5.5, b = -10

// BigInt
// let e = 234534534n

// String
// let s = 'te\nxt'
// let s2 = "text"
// \n \t \\ \'

// let s3 = s + s2 + ' text3'

// let s4 = 5 + 10 + s2

// let r = Math.random()
// let s5 = `<h2>${r < 0.5 ? 'min' : 'max'}</h2>`

// document.getElementById('app').innerHTML = s5

// Null
// const d = null

// + - / * ** %

// Symbol

// undefined

// let und;

// console.log(und)
// console.log(typeof u  )

// if (typeof u === 'undefined'){
    
// }

// const mas = [
//     [1,2,3],
//     [1,2,3],
//     [1,2,3],
//     [1,2,3],
// ]

// Object
// const obj = {
//     userName: 'vasya',
//     age: 10,
//     salary: null,
//     'city-leave': 'town N',
//     getName: function() {
//         return this.userName
//     },
//     setName: function(newName) {
//         this.userName = newName
//     }
// }

// obj['city-leave']
// obj['age']

// console.log(obj)

// mas.push(20);
// console.log(mas)
// console.log(mas.length)


// let a = 5,b = 1
// const c = 5
// console.log(a,b,c)

// let p = prompt('set value:','')

// let res = confirm('You are ready?')

// if (confirm('You are ready?')) {
//     alert('ok!')
// }

// let a = 1

// if (a == 1){
//     a = 10
//     let b = 20
// }

// for(let i = 0;i<5;i++){
//     console.log(i)
// }

// for(;;){
    // break
    // continue
// }

// let a=1
// while(a>5){}

// switch(a){
//     case 5:
//         break
//     default:
//         console.log(2)
// }

// // console.log(i)


// const mas = [1, 2, 3, , , , 4];

// for(let i = 0; i < mas.length; i++){
//     if (typeof mas[i] != 'undefined'){
//         console.log(mas[i]);
//     }
// }

// console.log(`false => ${ false ? 'true' : 'false'}`)
// console.log(`0 => ${ 0 ? 'true' : 'false'}`)
// console.log(`'' => ${ '' ? 'true' : 'false'}`)
// console.log(`null => ${ null ? 'true' : 'false'}`)
// console.log(`undefined => ${ undefined ? 'true' : 'false'}`)
// console.log(`NaN => ${ NaN ? 'true' : 'false'}`)
// console.log(`[] => ${ [] ? 'true' : 'false'}`)
// console.log(`{} => ${ {} ? 'true' : 'false'}`)
// console.log(`' ' => ${ ' ' ? 'true' : 'false'}`)
// console.log(`'a' => ${ 'a' ? 'true' : 'false'}`)

// let x = 5;

// if (x == 5){
//     let b = Math.random(), z = 4
//     if(b < 0.5){
//         x = x ** 2
//         c = b + x + z
//     }else{
//         x = x ** 3
//         c = b + x + z
//     }
// }

// console.log(`x = ${x}, b = ${b},c = ${c}, z = ${z}`)

// function func(){
//     let c
//     c = 0
//     console.log(x ** 2)

//     return function (){
        // console.log(++c)
        // console.log('f2')
//         return ++c
//     }
// }

// let f = func()
// console.log(`f = ${f()}`)

// console.log(`f = ${f()}`)
// console.log(`f = ${f()}`)
// console.log(`f = ${f()}`)
// console.log(`f = ${f()}`)

// let f = function () {
//     console.log(x**2)
// }

// x = 5
// let f = () => {
//     x = x ** 2
//     console.log(x)
// }
// f(x)

// let f = () => console.log(x ** 2)
// const func = (x) => x ** 2
// console.log(func(x))






// const y = 5;

// console.log(func(y)); // 25 || 5 || undefined || NaN
// console.log(func(y)); // 25

// function func(z) {
//     return z ** 2;
// }

// console.log(func(y)); // undefined -> ошибка компилятора
// const func = (x) => x ** 2;
// console.log(func(y)); // ошибок нет

// console.log(v2(y, 'text1', 'text2', false))

// //! DEPRECATED
// function v2() {
//     console.log(arguments);
//     let z = Array.from(arguments);
    
//     for(item of z) {
//         console.log(item);
//     }

// }


// console.log(v2(y, 'text1', 'text2', false))

// //* ...array -> Собрать все аргументы в массив
// //* ... -> оператор сбора rest
// function v2(a1, a2, a3, a4, ...array) {
//     console.log(a1);
//     console.log(a2);
//     console.log(a3);
//     console.log(a4);
//     console.log(array);
    
//     for(item of array) {
//         console.log(item);
//     }   
// }


//* ... -> spread

// const y = [1, 2, 3, 4, 5];
// let z = [...y];
// z.push('v');

// console.log( Math.max(...y) );

// console.log(y, z);


// console.log(merge(y, 'text1', 'text2', false))
// function merge(ar1, ...array) {
//     return [...ar1, ...array];
// }

// y.forEach(
//     (item, key, ar) => console.log('key: ' + key, 'item: ' + item, ar)
// )

// for(let i = 0; i < y.length; i++) {
//     console.log(y[i]);
// }


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
       
      // Last i elements are already in place 
      for(var j = 0; j < ( arr.length - i -1 ); j++) {
         
        // Checking if the item at present iteration
        // is greater than the next iteration
        if(arr[j] > arr[j+1]){
           
          // If the condition is true then swap them
          var temp = arr[j]
          arr[j] = arr[j + 1]
          arr[j+1] = temp
        }
      }
    }
    return arr;
}