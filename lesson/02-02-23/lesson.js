const obj1 = {}
const obj2 = new Object()
const obj3 = new Object(null)
const obj4 = new Object(undefined)


const user = {
    name: 'Vasya',
    login: 'VasyaLogin',
    age: 50,

    getName: function() { return this.name },
    getAge: function() { return this.age },
    getInfo: function() { return `user: ${this.name}, age: ${this.age}` },
    
    getInfo: function() { return `user: ${this.getName()}, age: ${this.getAge()}` },
}