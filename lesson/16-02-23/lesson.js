// OOP

class Animal
{
    static #countAnimal = 0
    type

    constructor(type)
    {
        this.type = type
    }
}

class Pet extends Animal
{
    static #countPet = 0
    #nickname
    age

    
    constructor(type, nickname, age)
    {
        if (Pet.#countPet < 2)
        {
            super(type)

            this.type = type
            this.#nickname = nickname
            this.age = age
            Pet.#countPet++
        }
        else
        {
            return {status: 'error', message: 'Max pet count is 2'}
        }
        
    }

    set nickname(value)
    {
        this.#nickname = value
    }

    get nickname()
    {
        return this.#nickname
    }

    get countPet()
    {
        return Pet.#countPet
    }

    static get countPet()
    {
        return Pet.#countPet
    }
}

const cat = new Pet('cat', 'vasya', 1)
const dog = new Pet('dog', 'barbos', 2)


