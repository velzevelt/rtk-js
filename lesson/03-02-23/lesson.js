// const obj1 = {}
// const obj2 = new Object()
// const obj3 = new Object(null)
// const obj4 = new Object(undefined)

// function create(ears, oranges) {
//     return {
//         ears, oranges
//     }
// }

// const cheburashka = create(2, 32)

// console.log(cheburashka)

// let x = 5


// const user = {
//     name: 'Vasya',
//     login: 'VasyaLogin',
//     age: 50,

//     getName() { return this.name },
//     getAge() { return this.age },
//     getInfo() { return `user: ${this.name}, age: ${this.age}` },

//     getArrowInfo: () => { console.log(x) },

//     ar: [1, 2, 3, 4, 5, 6],

//     arQuad() { 
//         return this.ar.map( (val) => val ** 2 + this.age )
//     }

// }


function CreateObject() {
    this.name = "Vasya"
    this.age = 50
    this.login = "VasyaLogin"
    
    this.getAge = function() {return this.age}
    this.getName = function() { return this.name }
    this.getInfo = function() {  return `user: ${this.name}, age: ${this.age}`}
    
    this.getArrowInfo = () => {console.log('some info')}
    
    this.ar = [1, 2, 3]
    this.arQuad = function() { return this.ar.map( (val) => val ** 2 + this.age ) }

    this.getNameValue = function () { 
        // const keys = Object.keys(this)
        // const values = Object.values(this)
        // keys.filter( (val) => val !== Function )
        // return keys
        // return Object
            // .values(this)

            // return r
            // .forEach( (e1, key) => {
            //     if(typeof e1 !== "function") {
            //         console.log(`${Object.keys(this)[key]}: ${e1}`)
            //     }
            // } )


        // const keys = Object.keys(this)
        // const values = Object.values(this)
        // const res = []
        // for(let i = 0; i < keys.length; i++) {
        //     const value = values[i]
        //     if(typeof value !== "function") {
        //         res.push(`${keys[i]}: ${value}`)
        //     }
        // }
        // return res

        const entries = Object.entries(this)
        const res = []
        for(let i = 0; i < entries.length; i++) {
            if(typeof entries[i][1] !== "function") {
                res.push(`${entries[i][0]}: ${entries[i][1]}`)
            }
        }
        return res
     } 


    // return {a: 5}
}

const obj = new CreateObject()

let fruit = 'orange'
fruit = 'banana'

const cheburashka = {
    ears: 2,
    [fruit]: 2
}



const obj2 = {}

// console.log( Object.keys(obj2).length )
// console.log(isEmptyObject(new String()))
// console.log(isEmptyObject(new Number()))
// console.log(isEmptyObject(new Boolean()))
// console.log(isEmptyObject(new Object()))
// console.log(isEmptyObject(new Array()))


// function isEmptyObject(obj) {
//     return !Object.keys(obj).length
// }
