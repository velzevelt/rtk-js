



class Test
{
    constructor()
    {
        this.test = true
    }
}


class Game 
{
    constructor(armies) 
    {
        this.armies = armies
        this.rounds = 3

        for (let i = 1; i <= this.rounds; i++) {
            this.play()
            this.armies = armies
            this.resetUnits()
        }
    }

    play() 
    {
        let currentPlayer = this.getRandArmy()
        let currentEnemy = this.getRandArmy([currentPlayer])
        
        let move_id = 1

        while (this.hasTwoPlayers()) {
            if (currentPlayer.canMove() && currentEnemy.canMove()) {
                let attacker = currentPlayer.getActiveUnit()
                let target = currentEnemy.getActiveUnit()
                currentPlayer.makeMove(currentEnemy, attacker, target)

                if (target.active) {
                    move_id++
                    currentEnemy.makeMove(currentPlayer, target, attacker)
                }
            } else {
                const loser = currentPlayer.canMove() ? currentEnemy : currentPlayer
                this.armies.remove(loser)
            }

            if (this.hasTwoPlayers()) {
                currentPlayer = this.getRandArmy()
                currentEnemy = this.getRandArmy(currentPlayer)
            }

            move_id++
        }

        const winner = this.armies[0]

    }

    getRandArmy(exclude) 
    {
        let randId = Math.floor(Math.random() * this.armies.length)
        let randUnit = this.armies[randId]

        while (randUnit === exclude) {
            randId = Math.floor(Math.random() * this.armies.length)
            randUnit = this.armies[randId]
        }

    }

    hasTwoPlayers() 
    {
        return this.armies.length >= 2
    }
}

class Army
{
    constructor(name, maxUnits)
    {
        this.units = []
        this.name = name
        this.maxUnits = maxUnits
        this.makeUnits(maxUnits)
    }

    makeUnits(maxUnits)
    {
        for (let i = 0; i < maxUnits; i++) {
            this.units.push(new Unit());
        }
    }

    resetUnits()
    {
        this.units = []
        this.makeUnits(this.makeUnits)
    }

    makeMove(enemyArmy, attacker, target)
    {
        attacker.attack(target)
    }

    canMove()
    {
        let res = false
        for (let i = 0; i < this.units.length; i++) {
            if(this.units[i].active) {
                res = true
                break
            }
        }
        return res
    }

    getActiveUnit()
    {
        let randId = Math.floor(Math.random() * this.units.length)
        let randUnit = this.units[randId]

        while (randUnit.destroyed) {
            randId = Math.floor(Math.random() * this.units.length)
            randUnit = this.units[randId]
        }

        return randUnit
    }

}

class Unit
{
    constructor() 
    {
        this.active = true
        this.destroyed = false
        this.health = 100
        this.damage = getRandomInt(5, 45)
        this.name = getRandomInt(1, 100)
    }

    takeDamage(damage)
    {
        this.health -= damage 
    }

    attack(target)
    {
        target.takeDamage(this.damage)
    }
}



function getRandomInt(min, max) 
{
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min); // The maximum is exclusive and the minimum is inclusive
}


// const armies = []

// for(let i = 0; i < 3; i++) {
//     const army = new Army(i + 1, 3)
//     armies.push(army)
// }

// const game = new Game(armies)
// console.log(game)

const army = new Army('aboba', 2)

console.log(army.units)