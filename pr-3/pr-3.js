/** Две черепахи бегут марафон – 40 км. За раз они могут пробежать только 4 часа
со скоростью 2км/ч. После этого необходим отдых от 3-5 часов, причем если черепаха
спит больше 4 часов, то каждые полные 15 минут добавляют ей возможность
дополнительно пробежать 250м к «дневной» дистанции. Произвести симуляцию забега с
логированием всех событий в консоль. Результаты забега вывести на страницу через alert. */


class TurtleRunner 
{
    runH = 4
    speedKpH = 2

    runDistanceK = 40
    hourSimulationMilSeconds = 320

    sleepH = 0

    totalRunH = 0
    totalSleepH = 0
    finished = false

    constructor(name)
    {
        this.name = name
    }


    startRace()
    {
        // Из-за потери контекста, неободимо передавать функцию как () => this.funcName()
        setTimeout(() => this.#run(), this.hourSimulationMilSeconds)
    }

    #run()
    {
        this.runDistanceK -= this.speedKpH
        this.runH--
        this.totalRunH++

        
        //#region Логирование
        let runMessage = ''
        if (this.name !== undefined) {
            runMessage += `Черепаха "${this.name}": `
        }
        runMessage += `Осталось бежать: ${this.runDistanceK} км. Могу бежать еще ${this.runH} ч`
        console.log(runMessage)
        //#endregion LOG

        if (this.runDistanceK <= 0) 
        {
            this.finished = true
        } 
        else 
        {
            if (this.runH > 0) 
            {
                setTimeout(() => this.#run(), this.hourSimulationMilSeconds)
            }
            else 
            {
                this.sleepH = getRandomInt(3, 5)
                setTimeout(() => this.#sleep(), this.hourSimulationMilSeconds)
            }
        }

    }

    #sleep()
    {
        this.sleepH--
        this.totalSleepH++
        
        //#region Логирование
        let sleepMessage = ''
        if (this.name !== undefined) {
            sleepMessage += `Черепаха "${this.name}": `
        }
        sleepMessage += `Осталось спать: ${this.sleepH}`
        console.log(sleepMessage)
        //#endregion LOG

        if (this.runH < 4) {
            this.runH++
        }

        if (this.sleepH > 0) 
        {
            setTimeout(() => this.#sleep(), this.hourSimulationMilSeconds)
        }

        this.#run()
    }


    
}

function getRandomInt(min, max) 
{
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);
}


const turtle_1 = new TurtleRunner('Снежанна')
// const turtle_2 = new TurtleRunner()

turtle_1.startRace()