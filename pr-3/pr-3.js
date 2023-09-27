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

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min);
}

function getRandomElement(from) {
  return from[Math.floor(Math.random() * from.length)];
}


function tryAction(conditionfn, onTrue, onFalse) {
  if (conditionfn())
    onTrue()
  else
    onFalse()
}

function doNothing() { }

function fold(...f) {
  return () => {f.forEach( (fn) => fn() )}
}


class TurtleRunner {
  active = true;
  distanceM = 40 * 1000;
  speedMpMin = 2 * 1000 / 60;
  runTimeMin = 4 * 60;
  sleepTimeMin = 0;
  needToSleepMin = 0;
  
  totalSleepMin = 0;
  totalRunMin = 0;

  onFinish = doNothing;

  finishTimeMin = 0;

  update(stepMin, turtleId, globalTimeMin) {
    const canRun = () => this.runTimeMin > 0;
    const canSleep = () => this.needToSleepMin !== undefined;
    
    const run = () => {
      console.log(this.logRun(turtleId));
      this.runTimeMin -= stepMin;
      this.totalRunMin += stepMin;
      this.distanceM -= this.speedMpMin;
    }

    const resetSleep = () => {
      this.needToSleepMin = getRandomInt(3*60, 5*60);
      this.sleepTimeMin = 0;
    }

    const sleep = () => {
      console.log(this.logSleep(turtleId));
      this.sleepTimeMin += stepMin;
      this.totalSleepMin += stepMin;
    }

    const tryEndSleep = () => {
      tryAction( () => this.sleepTimeMin >= this.needToSleepMin, 
                 fold( () => this.runTimeMin = this.sleepTimeMin, resetSleep), 
                 doNothing);
    }

    const manageSleep = fold(sleep, tryEndSleep);
    const trySleep = () => tryAction(canSleep, manageSleep, fold(resetSleep, manageSleep));

    const isFinished = () => this.distanceM <= 0;
    const finish = () => {
      this.finishTimeMin = globalTimeMin;
      this.active = false;
      const message = this.logFinish(turtleId, globalTimeMin);
      console.log(message);
      this.onFinish = () => message;
    }


    tryAction(canRun, run, trySleep);
    tryAction(isFinished, finish, doNothing);
  }

  logSleep(turtleId) {
    return `Черепаха ${turtleId}: спит ${this.sleepTimeMin} мин, осталось спать ${this.needToSleepMin - this.sleepTimeMin}`;
  }

  logRun(turtleId) {
    return `Черепаха ${turtleId}: бежит, осталось бежать ${this.runTimeMin} мин; ${Math.round(this.distanceM)} м`;
  }

  logFinish(turtleId, finishTimeMin) {
    return `Черепаха ${turtleId}: финиш в ${finishTimeMin} мин. Минут бега: ${this.totalRunMin} Минут сна: ${this.totalSleepMin}`;
  }
}



class TrainStop {
  constructor(travelTimeMin = undefined, idleTimeMin = undefined, allowedIdleTimeMin = undefined, name = undefined) {
    this.travelTimeMin = travelTimeMin ?? getRandomInt(20, 120);
    this.idleTimeMin = idleTimeMin ?? getRandomInt(5, 20);
    this.allowedIdleTimeMin = allowedIdleTimeMin ?? 15; // Допустимое время задержки
    this.name = name ?? getRandomElement('abcdefghijklmnopqrstuvwxyz'.toUpperCase().split('')) + getRandomInt(1, 100)
  }
}


class Train {
  active = true;
  #currentStopId = 0;
  #totalTravelMin = 0;
  #totalIdleMin = 0;
  onFinish = doNothing;
  finishTimeMin = 0;

  constructor(stops = undefined) {
    this.stops = stops ?? Train.generateStops();
  }


  update(stepMin, trainId, globalTimeMin) {
    const changeStop = (newId) => {
      this.currentStop = structuredClone(this.stops.at(newId)); //.clone();
      return this.currentStop;
    }

    const currentStop = this.currentStop ?? changeStop(this.#currentStopId);

    const prepareToTravel = () => {
      currentStop.idleTimeMin -= stepMin;
      this.#totalIdleMin += stepMin;
      console.log(this.logIdle(trainId, currentStop.name, currentStop.idleTimeMin));
    };

    const travel = () => {
      currentStop.travelTimeMin -= stepMin;
      this.#totalTravelMin += stepMin;
      console.log(this.logMoving(trainId, currentStop.name, currentStop.travelTimeMin));
    }

    const switchToNextStop = () => (changeStop(++this.#currentStopId));

    const isReadyToTravel = () => currentStop.idleTimeMin <= 0;

    const isReachedStop = () => currentStop.travelTimeMin <= 0;

    const finish = () => {
      this.finishTimeMin = globalTimeMin;
      this.active = false;
      const message = this.logFinish(trainId, globalTimeMin);
      console.log(message);
      this.onFinish = () => message;
    }

    const isLastStop = () => this.#currentStopId >= this.stops.length;


    tryAction(isReadyToTravel, travel, prepareToTravel);
    tryAction(isReachedStop, switchToNextStop, doNothing);
    tryAction(isLastStop, finish, doNothing);
  }

  logIdle(trainId, currentStopName, tMin) {
    return `Поезд ${trainId}: ведется смена локомотива, осталось ждать ${tMin} мин`;
  }

  logMoving(trainId, currentStopName, tMin) {
    return `Поезд ${trainId}: едет к остановке ${currentStopName}, осталось ехать ${tMin} мин`;
  }

  logFinish(trainId, finishTimeMin) {
    const plannedTime = this.stops.reduce((prev, current) => prev + current.allowedIdleTimeMin + current.travelTimeMin, 0);
    const realTime = this.#totalIdleMin + this.#totalTravelMin;
    const deviation = plannedTime - realTime;

    const lateOrAhead = deviation < 0 ? "Опоздал" : "Прибыл раньше";

    return `Поезд ${trainId}: финиш в ${finishTimeMin} мин! Запланировано: ${plannedTime} мин; Фактически: ${realTime} мин; ${lateOrAhead} на ${Math.abs(deviation)} мин`;
  }

  static generateStops(stopsAmount = 5) {
    return (new Array(stopsAmount)).fill().map(() => new TrainStop());
  }

}


class Timer {
  #tickStepMil; // 20:1 <- 1200:60
  tickStepMin = 1;
  totalTimeMin = 0;
  racers;
  onDone;

  constructor(racers = undefined, tickStepMin = undefined, onDone = doNothing) {
    this.racers = racers ?? [];
    this.#tickStepMil = tickStepMin ?? 20;
    this.onDone = onDone;
  }

  startTimer() {
    const isProcessing = () => this.racers.filter((racer) => racer.active === true).length !== 0;
    
    const updateRacer = (racer, racerId) => racer.update(this.tickStepMin, racerId, this.totalTimeMin);
    const updateRacers = () => this.racers.forEach( (racer, id) => { if (racer.active) updateRacer(racer, id) });
    const sortRacers = () => this.racers.sort( (r1, r2) => r1?.finishTimeMin - r2?.finishTimeMin );
    
    const getFinishMessage = () => this.racers.reduce((prev, current) => prev + current.onFinish() + "\n\n", "");
    const showFinishMessage = () => {
      const m = getFinishMessage();  
      tryAction(() => m !== "", () => alert(m), doNothing);
    }
    
    const createTimeout = () => setTimeout(process, this.#tickStepMil);
    const process = () => {
      this.totalTimeMin += this.tickStepMin;
      updateRacers();
      tryAction(isProcessing, createTimeout, fold(sortRacers, showFinishMessage, this.onDone));
    }

    createTimeout();
  }



}


// Задание 2

const turtles = [
  new TurtleRunner(),
  new TurtleRunner(),
  new TurtleRunner(),
  new TurtleRunner(),
]

const turtleTimer = new Timer(turtles, 320 / 60);


// Задание 1

const trains = [
  new Train(
    [new TrainStop(20, 10, 15, "Начальная остановка")]
    .concat( Train.generateStops(2), new TrainStop(20, 10, 15, "Конечная остановка") ) 
    ),
  
  new Train(),
  new Train(),
]

// const trainTimer = new Timer(trains, 1200 / 60);
const trainTimer = new Timer(trains, 1200 / 60, () => turtleTimer.startTimer());
trainTimer.startTimer();







