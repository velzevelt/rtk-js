class InvalidFactorialError extends Error {}
class InvalidArgumentTypeError extends Error {}
class InvalidEquation extends Error {}

class Factorial {
  constructor(n) {
    this.n = n;
  }

  calculate() {
    let res = NaN;

    if (Number.isInteger(this.n) && this.n >= 0) {
      if (this.n === 0 || this.n === 1) {
        res = 1;
      } else {
        res = this.n * new Factorial(this.n - 1).calculate();
      }
    } else {
      throw new InvalidFactorialError(
        `Неверное число ${this.n}. Факториал не существует`
      );
    }

    return res;
  }

  calculatePrompt() {
    this.n = Number.parseInt(prompt("Посчитать факториал для n"));
    let out;
    try {
      out = this.calculate();
    } catch (error) {
      out = error.message;
    }

    alert(out);
  }
}

class QuadEquation {
  constructor(a = 0, b = 0, c = 0) {
    this.a = a;
    this.b = b;
    this.c = c;
  }

  solveEquationPrompt() {
    this.a = prompt("Введите a: ");
    this.b = prompt("Введите b: ");
    this.c = prompt("Введите c: ");

    let out = NaN;
    try {
      this.a = parseInt(this.a);
      this.b = parseInt(this.b);
      this.c = parseInt(this.c);

      out = this.solveEquation();
    } catch (error) {
      out = error.message;
    }

    alert(out);
  }

  solveEquation() {
    let res = NaN;

    // Проверяем, полное ли это квадратное уравнение
    const args = [this.a, this.b, this.c];
    const full = args.every((val) => Number.isFinite(val) && val !== 0);
    if (full) {
      const d = this.b ** 2 - 4 * this.a * this.c;

      if (d <= 0) {
        res = d === 0 && this.a !== 0 ? [(-this.b / 2) * this.a] : NaN;
      } else {
        const d_root = Math.sqrt(d);
        const t = 2 * this.a;
        res = [(-this.b + d_root) / t, (-this.b - d_root) / t];
      }
    } else if (args.every((val) => Number.isFinite(val))) {
      
      if (args.every((val) => val === 0))
        throw new InvalidEquation("Неверное уравнение");
    
      // Неквадратное уравнение
      const caseA = this.a === 0 && this.b !== 0 && this.c !== 0;

      // см. guide.png
      const caseC = this.c === 0 && this.a !== 0 && this.b !== 0;
      const caseBC = this.b === 0 && this.c === 0 && this.a !== 0;

      const t = -this.c / this.a;
      console.log(t);

      const caseB = this.b === 0 && this.a !== 0 && this.c !== 0 && t > 0;

      if (caseB) {
        res = [-Math.sqrt(t), Math.sqrt(t)];
      } else if (caseC) {
        res = [0, -this.b / this.a];
      } else if (caseBC) {
        res = [0];
      } else if (caseA) {
        // res = [-this.c/this.b];
        throw new InvalidEquation("Неверное уравнение");
      }
    } else {
      const imposters = [];
      args.forEach(function (arg) {
        if (!Number.isFinite(arg)) {
          imposters.push(`"${typeof arg}": ${arg}`);
        }
      });

      throw new InvalidArgumentTypeError(
        `Аргумент этого типа не поддерживается ${imposters}`
      );
    }

    return res;
  }
}
