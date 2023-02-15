/** Две черепахи бегут марафон – 40 км. За раз они могут пробежать только 4 часа
со скоростью 2км/ч. После этого необходим отдых от 3-5 часов, причем если черепаха
спит больше 4 часов, то каждые полные 15 минут добавляют ей возможность
дополнительно пробежать 250м к «дневной» дистанции. Произвести симуляцию забега с
логированием всех событий в консоль. Результаты забега вывести на страницу через alert. */


class TurtleRunner 
{
    runH = 4
    speedKpH = 2
    initSpeedKpH = this.speedKpH

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
        if (this?.name) {
            runMessage += `Черепаха "${this.name}": `
        }
        runMessage += `Осталось бежать: ${this.runDistanceK} км. Скорость: ${this.speedKpH}. Могу бежать еще ${this.runH} ч`
        console.log(runMessage)
        //#endregion

        
        if (this.speedKpH > this.initSpeedKpH)
        {
            this.speedKpH--
        } 


        if (this.runDistanceK <= 0) 
        {
            this.finished = true
            this.#showRaceTotal()
        } 
        else 
        {
            if (this.runH > 0) 
            {
                setTimeout(() => this.#run(), this.hourSimulationMilSeconds)
            }
            else 
            {
                // this.sleepH = 5
                this.sleepH = getRandomInt(3, 5)
                setTimeout(() => this.#sleep(), this.hourSimulationMilSeconds)
            }
        }

    }

    #sleep()
    {
        if (this.runH < 4) 
        {
            this.runH++
        }
        else
        {
            this.speedKpH++
        }

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

        if (this.sleepH > 0) 
        {
            setTimeout(() => this.#sleep(), this.hourSimulationMilSeconds)
        } 
        else
        {
            setTimeout(() => this.#run(), this.hourSimulationMilSeconds)
        }

    }


    #showRaceTotal()
    {
        let totalMessage = ''
        if (this?.name) 
        {
            totalMessage += `Черепаха "${this.name}": Финиш! `
        }
        totalMessage += `Часов пробега: ${this.totalRunH}. Часов сна: ${this.totalSleepH}`
        console.log(totalMessage)
        alert(totalMessage)
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


// const turtle_1 = new TurtleRunner('Снежанна')
// const turtle_2 = new TurtleRunner('Анжелина')

// turtle_1.startRace()
// turtle_2.startRace()



class Train
{
    hourSimulationMilSeconds = 1200
    currentTrainStop

    // Маршрут
    constructor(route)
    {
        if (route)
        {
            this.currentTrainStop = route.stops[0]
        }
    }

    startMoving()
    {
        setTimeout(() => this.#start(), this.hourSimulationMilSeconds)
    }

    #start()
    {

    }

    #move()
    {
        
    }

    
}


// Маршрут. Точка отбытия. Точка назначения. Остановки
class Route
{
    departureCity
    destinationCity
    stops

    constructor(departureCity, destinationCity)
    {
        this.departureCity = departureCity
        this.destinationCity = destinationCity

        const initTrainStop = new TrainStop()
        this.stops = [initTrainStop]

        for (let i = 1; i < getRandomInt(2, 5); i++)
        {
            const nextTrainStop = new TrainStop()
            this.stops[i - 1].nextStop = nextTrainStop
            this.stops.push(nextTrainStop)
        } 
    }
}


// Остановка. Название остановки. Длительность остановки. Длительность движения к следующей остановке. Следующая остановка
class TrainStop
{
    stopName
    stopTimeH // Длительность остановки
    travelTimeH // Время движения к следующей остановке
    nextStop //* Следующая остановка. Задавать вне конструктора

    alphabet = 'abcdefghijklmnopqrstuvwxyz'.toUpperCase().split('')

    constructor()
    {
        this.stopName = getRandomElement(this.alphabet) + getRandomInt(1, 100)
        this.stopTimeH = getRandomInt(1, 2)
        this.travelTimeH = getRandomInt(1, 8)
    }
}


// const train = new Train(new Route('N', 'M'))

const test = new Route('N', 'M')
console.log(test)