/*
    Две черепахи бегут марафон – 40 км. За раз они могут пробежать только 4
    часа со скоростью 2км/ч. После этого необходим отдых от 3-5 часов, причем если
    черепаха спит больше 4 часов, то каждые полные 15 минут добавляют ей возможность
    дополнительно пробежать 250м к «дневной» дистанции. Произвести симуляцию забега с
    логированием всех событий в консоль. Результаты забега вывести на страницу через alert.
*/


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
        if (this?.name) {
            sleepMessage += `Черепаха "${this.name}": `
        }
        sleepMessage += `Осталось спать: ${this.sleepH}`
        console.log(sleepMessage)
        //#endregion

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

// Задание 1
// const turtle_1 = new TurtleRunner('Снежанна')
// const turtle_2 = new TurtleRunner('Анжелина')
// turtle_1.startRace()
// turtle_2.startRace()



/*
    Поезд двигается по маршруту от города N до города M. На пути у него k –
    остановок. Количество остановок и их длительность, а также длительность движения
    между остановками, задаются студентом самостоятельно. В время остановок поезда
    происходит смена локомотива, поэтому следующий участок поезд может проехать в
    любом из 3-х вариантов: с опозданием, с увеличенным скоростным режимом, либо по
    расписанию. Движение поезда и его остановки логировать в консоль (с указанием режима
    движения) с выводом временных меток движения. Финальный результат симуляции
    вывести на страницу через alert, с результатом общей поездки: по расписанию, с
    опозданием, поезд пришел заранее, с указанием временных меток.
*/

class Train
{
    hourSimulationMilSeconds = 10
    speedKpH = 0
    travelStatus = 'По расписанию'
    TrainRoute
    currentTrainStop

    totalTimeH = 0

    constructor(TrainRoute)
    {
        this.TrainRoute = TrainRoute
        if (TrainRoute)
        {
            this.currentTrainStop =  {...TrainRoute.stops[0]} //* Нельзя менять исходные данные остановки, можно использовать только копии
            this.speedKpH = Math.round(this.currentTrainStop.nextStopDistanceK / this.currentTrainStop.plannedTravelTimeH)
        }        
        else
        {
            console.error('Train init error. Check passed TrainRoute')
        }
    }

    startMoving()
    {
        setTimeout(() => this.#move(), this.hourSimulationMilSeconds)
    }

    #move()
    {
        if (this.currentTrainStop.stopTimeH > 0)
        {
            const delay = this.currentTrainStop.stopTimeH > this.currentTrainStop.plannedStopTimeH
            if (delay)
            {
                console.log(`Остановка ${this.currentTrainStop.stopName} (Возникла задержка): идет смена локомотива, осталось ждать ${this.currentTrainStop.stopTimeH} ч`)
            }
            else
            {
                console.log(`Остановка ${this.currentTrainStop.stopName}: идет смена локомотива, осталось ждать ${this.currentTrainStop.stopTimeH} ч`)
            }

            this.currentTrainStop.stopTimeH--
            this.totalTimeH++

            setTimeout(() => this.#move(), this.hourSimulationMilSeconds)
        }
        else if (this.currentTrainStop.nextStopDistanceK > 0)
        {
            if (this.currentTrainStop?.nextStop?.stopName)
            {
                console.log(`Едем ${this.travelStatus} (${this.speedKpH} км/ч), следующая остановка ${this.currentTrainStop.nextStop.stopName}, осталось ехать: ${this.currentTrainStop.nextStopDistanceK} км`)
            }
            else
            {
                console.log(`Едем ${this.travelStatus} (${this.speedKpH} км/ч), осталось ехать: ${this.currentTrainStop.nextStopDistanceK} км`)
            }

            this.totalTimeH++
            this.currentTrainStop.nextStopDistanceK -= this.speedKpH

            setTimeout(() => this.#move(), this.hourSimulationMilSeconds)
        }
        else
        {
            if (this.currentTrainStop?.nextStop)
            {
                this.currentTrainStop = {...this.currentTrainStop.nextStop}
                if (this.currentTrainStop.stopTimeH > this.currentTrainStop.plannedStopTimeH)
                {
                    this.travelStatus = "Скоростной режим"
                    this.speedKpH = Math.ceil(this.currentTrainStop.nextStopDistanceK / this.currentTrainStop.stopTimeH)
                }
                else
                {
                    this.travelStatus = "По расписанию"
                    this.speedKpH = Math.round(this.currentTrainStop.nextStopDistanceK / this.currentTrainStop.plannedTravelTimeH)
                }

                this.#move()
            }
            else
            {
                console.log(`Приехали`)
                this.#showTotal()
            }
        }
    }

    #showTotal()
    {
        let abberation = this.TrainRoute.totalTimeH - this.totalTimeH
        if (abberation > 0) {
            abberation = `Поезд прибыл раньше на ${abberation} ч`
        } else if (abberation == 0) {
            abberation = `Поезд прибыл согласно расписанию`
        } else {
            abberation = `Поезд опоздал на ${Math.abs(abberation)} ч`
        }

        const message = `Маршрут занял ${this.totalTimeH} ч, Преодолено: ${this.TrainRoute.totalTravelDistanceK} км, Ожидаемое время пути: ${this.TrainRoute.totalTimeH} ч, ${abberation}`
        console.log(message)
    }
}


// Маршрут
class TrainRoute
{
    departureCity
    destinationCity
    stops
    totalTravelTimeH = 0 // Итоговое время движения между остановками (по расписанию)
    totalTimeH = 0
    totalTravelDistanceK = 0 // Итоговое расстояние движения
    averageSpeedKpH = 0

    constructor(departureCity, destinationCity)
    {
        this.departureCity = departureCity
        this.destinationCity = destinationCity

        const initTrainStop = new TrainStop()
        this.stops = [initTrainStop]
        this.totalTravelTimeH += initTrainStop.plannedStopTimeH
        this.totalTravelDistanceK += initTrainStop.nextStopDistanceK
        
        for (let i = 1; i < getRandomInt(30, 45); i++)
        {
            const nextTrainStop = new TrainStop()

            this.stops[i - 1].nextStop = nextTrainStop
            this.stops.push(nextTrainStop)
            
            this.totalTravelTimeH += nextTrainStop.plannedStopTimeH
            this.totalTravelDistanceK += nextTrainStop.nextStopDistanceK
        }

        this.averageSpeedKpH = Math.round(this.totalTravelDistanceK / this.totalTravelTimeH)

        this.stops.forEach(element => {
            element.plannedTravelTimeH = Math.round(element.nextStopDistanceK / this.averageSpeedKpH) + element.plannedStopTimeH

            let offset = 0
            if (Math.random() * 100 > 75) // 25% -> Вероятность задержки на 1 час
            {
                offset++
            }

            element.stopTimeH = element.plannedStopTimeH + offset
            this.totalTimeH += element.plannedTravelTimeH + element.stopTimeH
        });
    }

}


// Остановка/Станция
class TrainStop
{
    stopName
    plannedStopTimeH // Планируемая длительность остановки
    stopTimeH // Длительность остановки
    nextStop //* Следующая остановка
    nextStopDistanceK // Расстояние до следующей остановки
    plannedTravelTimeH // Планируемая длительность движения до следующей остановки

    alphabet = 'abcdefghijklmnopqrstuvwxyz'.toUpperCase().split('')

    constructor()
    {
        this.stopName = getRandomElement(this.alphabet) + getRandomInt(1, 100)
        this.nextStopDistanceK = getRandomInt(80, 500)
        this.plannedStopTimeH = getRandomInt(1, 3)
    }
}


// Задание 2
// const train = new Train(new TrainRoute('N', 'M'))
// train.startMoving()