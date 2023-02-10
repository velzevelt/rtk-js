class Game 
{
    armies = []
    rounds = 5

    constructor(armies) 
    {
        for (let i = 1; i <= this.rounds; i++) {
            Game.log(`Раунд ${i}`)
            this.armies = []
            this.armies = [...armies]
            this.resetUnits()


            this.play()

            if (i != this.rounds) {
                Game.log("\n\n\n")
            } else {
                Game.log("Все раунды были проведены!")
            }
        }
    }

    play() 
    {
        let currentPlayer = this.getRandArmy()
        let currentEnemy = this.getRandArmy(currentPlayer) // get exclude currentPlayer 
        
        let moveId = 1

        // Игра продолжается, пока есть хотя бы две живые армии
        while (this.hasTwoPlayers()) {
            if (currentPlayer.canMove() && currentEnemy.canMove()) {
                
                let attacker = currentPlayer.getActiveUnit()
                let target = currentEnemy.getActiveUnit()
                currentPlayer.makeMove(currentEnemy, attacker, target, moveId)

                // Месть. Смена ролей
                if (target.active) {
                    moveId++
                    currentEnemy.makeMove(currentPlayer, target, attacker, moveId)
                }
            } else {
                // Какая-то из армий выбыла, находим и удаляем её
                let loser = currentPlayer.canMove() ? currentEnemy : currentPlayer
                loser = this.armies.indexOf(loser)

                this.armies.splice(loser, 1)
            }

            //* Доп проверка необходима, так как на предыдущем шаге произошло удаление и теперь живых игроков может не хватать для продолжения игры
            if (this.hasTwoPlayers()) {
                currentPlayer = this.getRandArmy()
                currentEnemy = this.getRandArmy(currentPlayer)
            }

            moveId++
        }

        // Мы всегда знаем, что "0" это победитель, так как на предыдущих шагах
        // все проигравшие армии были удалены из $this->armies и "0" - единственный виживший, т.е. победитель
        const winner = this.armies[0]
        
        // Логирование итогов
        let gameResult = `Победила армия ${winner.name}\n`
        const dead = winner.getDead()
        const deadCount = winner.countDead()
        gameResult += `Выбыло ${deadCount} (${dead})\n`

        const alive = winner.getAlive()
        const aliveCount = winner.countAlive()
        const sumHealth = winner.getUnitsHealth()
        gameResult += `Остались ${aliveCount} (${alive}) `
        gameResult += `суммарное здоровье ${sumHealth}`

        Game.log(gameResult)
    }

    getRandArmy(exclude) 
    {
        let randArmy = getRandomElement(this.armies)

        while (randArmy === exclude) {
            randArmy = getRandomElement(this.armies)
        }

        return randArmy
    }

    hasTwoPlayers() 
    {
        return this.armies.length >= 2
    }

    resetUnits()
    {
        this.armies.forEach( (val) => val.resetUnits(val.maxUnits) )
    }

    static log(message)
    {
        console.log(message)
    }
}

class Army
{
    units = []
    
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
        this.makeUnits(this.maxUnits)
    }

    makeMove(enemyArmy, attacker, target, moveId)
    {
        attacker.attack(target)
        this.attackLog(attacker, target, enemyArmy, moveId)
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
        let randUnit = getRandomElement(this.units)

        while (randUnit.destroyed) {
            randUnit = getRandomElement(this.units)
        }

        return randUnit
    }

    attackLog(attacker, target, enemyArmy, moveId)
    {
        const message = `Ход ${moveId}: Армия '${this.name}': Юнит '${attacker.name}' атакует (урон ${attacker.damage}) юнита '${target.name}' из Армии '${enemyArmy.name}' у вражеского юнита '${target.name}' осталось ${target.health} здоровья`
        Game.log(message)
    }

    getUnitsHealth() 
    {
        let res = 0
        this.units.forEach( (unit) => {
            if (unit.active) {
              res += unit.health
            }} )
        
        return res
    }

    getDead() 
    {
        const res = []
        this.units.forEach( (unit) => {
            if (unit.destroyed) {
              res.push(unit.name)  
            }} )
        
        return res
    }

    getAlive() 
    {
        const res = []
        this.units.forEach( (unit) => {
            if (unit.active) {
              res.push(unit.name)  
            }} )
        
        return res
    }

    countDead() 
    {
        let res = 0
        this.units.forEach( (unit) => {
            if (unit.destroyed) {
              res++  
            }} )
        
        return res
    }

    countAlive() 
    {
        let res = 0
        this.units.forEach( (unit) => {
            if (unit.active) {
              res++  
            }} )
        
        return res
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
        
        if (this.health < 1) {
            this.active = false
            this.destroyed = true
        }
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
    return Math.floor(Math.random() * (max - min) + min);
}

function getRandomElement(from)
{
    return from[Math.floor(Math.random() * from.length)]
}


// const armies = []

// for(let i = 0; i < 3; i++) {
//     armies.push(new Army(i + 1, 3))
// }

// const game = new Game(armies)
// console.log(game)

const armies = [
    new Army("G", 4),
    new Army("F", 4),
    new Army("X", 4)
]

const game = new Game(armies)