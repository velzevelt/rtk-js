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

    ar: [1, 2, 3, 4, 5, 6],

    arQuad() { 
        const self = this
        return self.ar.map( function(val) {return val ** 2 + self.age} )
    }
}

console.log(user.arQuad())

