function Game(armies) {
    this.armies = [];
    this.rounds = 5;

    this.play = function() {
        let currentPlayer = this.getRandArmy();
        let currentEnemy = this.getRandArmy(currentPlayer); // получить случайную армию без currentPlayer

        let moveId = 1;

        // Игра продолжается, пока есть хотя бы две живые армии
        while (this.hasTwoPlayers()) {
            if (currentPlayer.canMove() && currentEnemy.canMove()) {
                let attacker = currentPlayer.getActiveUnit();
                let target = currentEnemy.getActiveUnit();
                currentPlayer.makeMove(currentEnemy, attacker, target, moveId);

                // Месть. Смена ролей
                if (target.active) {
                    moveId++;
                    currentEnemy.makeMove(currentPlayer, target, attacker, moveId);
                }
            } else {
                // Какая-то из армий выбыла, находим и удаляем её
                let loser = currentPlayer.canMove() ? currentEnemy : currentPlayer;
                loser = this.armies.indexOf(loser);

                this.armies.splice(loser, 1);
            }

            //* Доп проверка необходима, так как на предыдущем шаге произошло удаление и теперь живых игроков может не хватать для продолжения игры
            if (this.hasTwoPlayers()) {
                currentPlayer = this.getRandArmy();
                currentEnemy = this.getRandArmy(currentPlayer);
            }

            moveId++;
        }

        // Мы всегда знаем, что "0" это победитель, так как на предыдущих шагах
        // все проигравшие армии были удалены из $this->armies и "0" - единственный виживший, т.е. победитель
        const winner = this.armies[0];

        // Логирование итогов
        let gameResult = `Победила армия ${winner.name}\n`;
        const dead = winner.getDead();
        const deadCount = winner.countDead();
        gameResult += `Выбыло ${deadCount} (${dead})\n`;

        const alive = winner.getAlive();
        const aliveCount = winner.countAlive();
        const sumHealth = winner.getUnitsHealth();
        gameResult += `Остались ${aliveCount} (${alive}) `;
        gameResult += `суммарное здоровье ${sumHealth}`;
        console.log(gameResult);

        return gameResult;
    }

    this.getRandArmy = function(exclude) {
        let randArmy = getRandomElement(this.armies);

        while (randArmy === exclude) {
            randArmy = getRandomElement(this.armies);
        }

        return randArmy;
    }

    this.hasTwoPlayers = function() {
        return this.armies.length >= 2;
    }

    this.resetUnits = function() {
        this.armies.forEach((val) => val.resetUnits(val.maxUnits));
    }

    this.log = function(message) {
        console.log(message);
    }


    // constructor(armies) {
        for (let i = 1; i <= this.rounds; i++) {
            console.log(`Раунд ${i}`);
            this.armies = [];
            this.armies = [...armies];
            this.resetUnits();

            let finaleResult = this.play();

            if (i != this.rounds) {
                console.log("\n\n\n");
            } else {
                console.log("Все раунды были проведены!");

                if(typeof(finaleResult) === "string")
                    alert(finaleResult);

            }
        }
    // }

}

function Army(name, maxUnits) {
    this.units = [];
    this.name;
    this.maxUnits;

    this.units = function() {
        return this.units;
    }
    this.maxUnits = function() {
        return this.maxUnits;
    }
    this.name = function() {
        return this.name;
    }

    

    this.makeUnits = function(maxUnits) {
        for (let i = 0; i < maxUnits; i++) {
            this.units.push(new Unit());
        }
    }

    this.resetUnits = function() {
        this.units = [];
        this.makeUnits(this.maxUnits);
    }

    this.makeMove = function(enemyArmy, attacker, target, moveId) {
        attacker.attack(target);
        this.attackLog(attacker, target, enemyArmy, moveId);
    }

    this.canMove = function() {
        let res = false;
        for (let i = 0; i < this.units.length; i++) {
            if (this.units[i].active) {
                res = true;
                break;
            }
        }
        return res;
    }

    this.getActiveUnit = function() {
        let randUnit = getRandomElement(this.units);

        while (randUnit.destroyed) {
            randUnit = getRandomElement(this.units);
        }

        return randUnit;
    }

    this.attackLog = function(attacker, target, enemyArmy, moveId) {
        const message = `Ход ${moveId}: Армия '${this.name}': Юнит '${attacker.name
            }' атакует (урон ${attacker.damage}) юнита '${target.name}' из Армии '${enemyArmy.name
            }' у вражеского юнита '${target.name}' осталось ${target.health} здоровья`;
        console.log(message);
    }

    this.getUnitsHealth = function() {
        let res = 0;
        this.units.forEach((unit) => {
            if (unit.active) {
                res += unit.health;
            }
        });

        return res;
    }

    this.getDead = function() {
        const res = [];
        this.units.forEach((unit) => {
            if (unit.destroyed) {
                res.push(unit.name);
            }
        });

        return res;
    }

    this.getAlive = function() {
        const res = [];
        this.units.forEach((unit) => {
            if (unit.active) {
                res.push(unit.name);
            }
        });

        return res;
    }

    this.countDead = function() {
        let res = 0;
        this.units.forEach((unit) => {
            if (unit.destroyed) {
                res++;
            }
        });

        return res;
    }

    this.countAlive = function() {
        let res = 0;
        this.units.forEach((unit) => {
            if (unit.active) {
                res++;
            }
        });

        return res;
    }


    //costructor
    this.units = [];
    this.name = name;
    this.maxUnits = maxUnits;
    this.makeUnits(this.maxUnits);
}

function Unit() {
    this.active;
    this.destroyed;
    this.health;
    this.damage;
    this.name;

    this.active = function() {
        return this.active;
    }
    this.destroyed = function() {
        return this.destroyed;
    }
    this.health = function() {
        return this.health;
    }
    this.damage = function() {
        return this.damage;
    }
    this.name = function() {
        return this.name;
    }

    
    this.takeDamage = function(damage) {
        this.health -= damage;

        if (this.health < 1) {
            this.active = false;
            this.destroyed = true;
        }
    }

    this.attack = function(target) {
        target.takeDamage(this.damage);
    }


    // constructor() {
        this.active = true;
        this.destroyed = false;
        this.health = 100;
        this.damage = getRandomInt(5, 45);
        this.name = getRandomInt(1, 100);
    // }
}

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);
}

function getRandomElement(from) {
    return from[Math.floor(Math.random() * from.length)];
}

// const armies = []
// for(let i = 0; i < 3; i++) {
//     armies.push(new Army(i + 1, 3))
// }
// const game = new Game(armies)
// console.log(game)


const armies = [new Army("G", 4), new Army("F", 4), new Army("X", 4)];
const game = new Game(armies);
