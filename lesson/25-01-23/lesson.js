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

// console.log(func(y)); // undefined -> ???????????? ??????????????????????
// const func = (x) => x ** 2;
// console.log(func(y)); // ???????????? ??????

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

// //* ...array -> ?????????????? ?????? ?????????????????? ?? ????????????
// //* ... -> ???????????????? ?????????? rest
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


