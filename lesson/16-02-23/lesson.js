// OOP

class Animal
{
    static #countAnimal = 0
    type

    constructor(type)
    {
        this.type = type
    }

    getSomeshit()
    {
        return '1'
    }

    get type()
    {
        return this.type
    }

    getType()
    {
        return this.type
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

    getSomeshit()
    {
        return super.getSomeshit() + '0'
    }

    getType()
    {
        return `type pet -> ${super.getType()}`
    }

    get type()
    {
        return super.getType()
    }
}

const cat = new Pet('cat', 'vasya', 1)
const dog = new Pet('dog', 'barbos', 2)


