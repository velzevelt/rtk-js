/** Две черепахи бегут марафон – 40 км. За раз они могут пробежать только 4 часа
со скоростью 2км/ч. После этого необходим отдых от 3-5 часов, причем если черепаха
спит больше 4 часов, то каждые полные 15 минут добавляют ей возможность
дополнительно пробежать 250м к «дневной» дистанции. Произвести симуляцию забега с
логированием всех событий в консоль. Результаты забега вывести на страницу через alert. */

const turtle_1 = new TurtleRunner()
const turtle_2 = new TurtleRunner()


class TurtleRunner 
{
    runTimeMinutes = 4 * 60
    speedMetrPerSecond = 2 / 3.6
    constructor(runDistanceMetrs = 40000) {
        this.runDistanceMetrs = runDistanceMetrs
    }
}