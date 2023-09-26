/*
    Две черепахи бегут марафон – 40 км. За раз они могут пробежать только 4
    часа со скоростью 2км/ч. После этого необходим отдых от 3-5 часов, причем если
    черепаха спит больше 4 часов, то каждые полные 15 минут добавляют ей возможность
    дополнительно пробежать 250м к «дневной» дистанции. Произвести симуляцию забега с
    логированием всех событий в консоль. Результаты забега вывести на страницу через alert.
*/

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

class TurtleRunner {
  runH = 4;
  speedKpH = 2;
  initSpeedKpH = this.speedKpH;

  runDistanceK = 40;
  hourSimulationMilSeconds = 320;

  sleepH = 0;

  totalRunH = 0;
  totalSleepH = 0;
  finished = false;

  constructor(name) {
    this.name = name;
  }

  startRace() {
    setTimeout(() => this.#run(), this.hourSimulationMilSeconds);
  }

  #run() {
    this.runDistanceK -= this.speedKpH;
    this.runH--;
    this.totalRunH++;

    //#region Логирование
    let runMessage = "";
    if (this?.name) {
      runMessage += `Черепаха "${this.name}": `;
    }
    runMessage += `Осталось бежать: ${this.runDistanceK} км. Скорость: ${this.speedKpH}. Могу бежать еще ${this.runH} ч`;
    console.log(runMessage);
    //#endregion

    if (this.speedKpH > this.initSpeedKpH) {
      this.speedKpH--;
    }

    if (this.runDistanceK <= 0) {
      this.finished = true;
      this.#showRaceTotal();
    } else {
      if (this.runH > 0) {
        setTimeout(() => this.#run(), this.hourSimulationMilSeconds);
      } else {
        // this.sleepH = 5
        this.sleepH = getRandomInt(3, 5);
        setTimeout(() => this.#sleep(), this.hourSimulationMilSeconds);
      }
    }
  }

  #sleep() {
    if (this.runH < 4) {
      this.runH++;
    } else {
      this.speedKpH++;
    }

    this.sleepH--;
    this.totalSleepH++;

    //#region Логирование
    let sleepMessage = "";
    if (this?.name) {
      sleepMessage += `Черепаха "${this.name}": `;
    }
    sleepMessage += `Осталось спать: ${this.sleepH}`;
    console.log(sleepMessage);
    //#endregion

    if (this.sleepH > 0) {
      setTimeout(() => this.#sleep(), this.hourSimulationMilSeconds);
    } else {
      setTimeout(() => this.#run(), this.hourSimulationMilSeconds);
    }
  }

  #showRaceTotal() {
    let totalMessage = "";
    if (this?.name) {
      totalMessage += `Черепаха "${this.name}": Финиш! `;
    }
    totalMessage += `Часов пробега: ${this.totalRunH}. Часов сна: ${this.totalSleepH}`;
    console.log(totalMessage);
    alert(totalMessage);
  }
}

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min);
}

function getRandomElement(from) {
  return from[Math.floor(Math.random() * from.length)];
}

// Задание 1
const turtle_1 = new TurtleRunner("Снежанна");
const turtle_2 = new TurtleRunner("Анжелина");
turtle_1.startRace();
turtle_2.startRace();

class TrainTimer {
    t
    totalTimeMin = 0;

    constructor() {
        
    }

}

class Train {


}

// Задание 2
// const train = new Train(new TrainRoute('N', 'M'))
// train.startMoving()
// 1200:1ч .. 1200:60 

// 1:20