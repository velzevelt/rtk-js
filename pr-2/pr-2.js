class Game 
{
    armies = []
    rounds = 3

    constructor(armies) 
    {
        this.armies = armies

        for (let i = 1; i <= this.rounds; i++) {
            Game.log(`Раунд ${i}`)
            this.play()
            this.resetUnits()

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
        
        let move_id = 1

        // Игра продолжается, пока есть хотя бы две живые армии
        while (this.hasTwoPlayers()) {
            if (currentPlayer.canMove() && currentEnemy.canMove()) {
                Game.log(`Ход ${move_id}:`)
                
                let attacker = currentPlayer.getActiveUnit()
                let target = currentEnemy.getActiveUnit()
                currentPlayer.makeMove(currentEnemy, attacker, target)

                // Месть. Смена ролей
                if (target.active) {
                    move_id++
                    Game.log(`Ход ${move_id}: Ответная атака!`)
                    currentEnemy.makeMove(currentPlayer, target, attacker)
                }
            } else {
                // Какая-то из армий выбыла, находим и удаляем её
                const loser = currentPlayer.canMove() ? currentEnemy : currentPlayer
                this.armies.remove(loser)
            }

            //* Доп проверка необходима, так как на предыдущем шаге произошло удаление и теперь живых игроков может не хватать для продолжения игры
            if (this.hasTwoPlayers()) {
                currentPlayer = this.getRandArmy()
                currentEnemy = this.getRandArmy(currentPlayer)
            }

            move_id++
        }

        // Мы всегда знаем, что "0" это победитель, так как на предыдущих шагах
        // все проигравшие армии были удалены из $this->armies и "0" - единственный виживший, т.е. победитель
        const winner = this.armies[0]
        
        // Логирование итогов
        let gameResult = `Победила армия ${winner.name}\n`
        const dead = winner.countDead()
        const deadCount = winner.countDead()
        gameResult += `Выбыло ${deadCount} (${dead})\n`

        const alive = winner.getAlive()
        const aliveCount = winner.aliveCount()
        gameResult += `Остались ${aliveCount} (${alive})`

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
        this.armies.forEach( (val) => {val.resetUnits(val.maxUnits)} )
    }

    static log(message)
    {
        console.log(message)
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
        this.attackLog(attacker, target, enemyArmy)
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

    attackLog(attacker, target, enemyArmy)
    {
        const message = `Армия '${this.name}': Юнит '${attacker.name}' атакует (урон ${attacker.damage}) юнита '${target.name}' из Армии '${enemyArmy.name}' у вражеского юнита '${target.name}' осталось ${target.health} здоровья`
        Game.log(message)
    }

    getUnitsHealth() {}

    getDead() {}

    getAlive() {}

    countDead() {}

    countAlive() {}
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
    return Math.floor(Math.random() * (max - min) + min); // The maximum is exclusive and the minimum is inclusive
}

function getRandomElement(from)
{
    return from[Math.floor(Math.random() * from.length)]
}


const armies = []

for(let i = 0; i < 3; i++) {
    armies.push(new Army(i + 1, 3))
}

const game = new Game(armies)
console.log(game)

// const armies = [
//     new Army("Дружба", 3),
//     new Army("Коррупция", 6),
//     new Army("Деменция", 4)
// ]

// console.log(armies)