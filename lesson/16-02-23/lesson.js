// OOP

class Pet
{
    static #countPet = 0
    type
    #nickname
    age

    constructor(type, nickname, age)
    {
        if (Pet.#countPet < 2)
        {
            this.type = type
            this.#nickname = nickname
            this.age = age
            Pet.#countPet++
        }
        else
        {
            console.error('Max pet count is 2')
            return {}
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

