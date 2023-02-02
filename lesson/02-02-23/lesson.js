// const obj1 = {}
// const obj2 = new Object()
// const obj3 = new Object(null)
// const obj4 = new Object(undefined)


let x = 5


const user = {
    name: 'Vasya',
    login: 'VasyaLogin',
    age: 50,

    getName() { return this.name },
    getAge() { return this.age },
    getInfo() { return `user: ${this.name}, age: ${this.age}` },

    getArrowInfo: () => { console.log(x) },

    ar: [1, 2, 3],

    arQuad() { 
        return this.ar.map( (val) => val ** 2 )
    }
}

console.log(user.arQuad())

