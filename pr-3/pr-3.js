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

    startRace()
    {
        setTimeout(this.run, hourSimulationMilSeconds)
    }

    run()
    {
        this.runDistanceK -= this.speedKpH
        while (this.runH > 0) {
            
        }

        this.sleep()
    }

    sleep()
    {
        const sleepHours = getRandomInt(3, 5)
    }
}

function getRandomInt(min, max) 
{
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);
}


const turtle_1 = new TurtleRunner()
const turtle_2 = new TurtleRunner()

