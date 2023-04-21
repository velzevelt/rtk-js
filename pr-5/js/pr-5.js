class InvalidFactorialError extends Error { }


class Factorial {
    constructor(n) {
        this.n = n
    }

    calculate() {
        let res = NaN;

        try {
            if (Number.isInteger(this.n) && this.n >= 0) {
                if (this.n === 0 || this.n === 1) {
                    res = 1;
                } else {
                    res = this.n * new Factorial(this.n - 1).calculate()
                }
            } else {
                throw new InvalidFactorialError(`Неверное число ${this.n}. Факториал не существует`)
            }
        } catch (error) {
            console.error(error)
        }


        return res;
    }

    calculatePrompt() {
        this.n = Number.parseInt(prompt('Посчитать факториал для n'))
        let out = this.calculate()
        if (Number.isNaN(out)) {
            out = 'Факториал не существует'
        }

        alert(out)
    }
}


class QuadEquation {
    constructor(a, b, c) {
        this.a = a
        this.b = b
        this.c = c
    }

    solveEquation() {
        let res = NaN

        // Проверяем, полное ли это квадратное уравнение
        const full = [this.a, this.b, this.c].every((val) => Number.isInteger(val) && val !== 0)
        if (full) {

            const d = this.b ** 2 - 4 * this.a * this.c

            if (d <= 0) {
                res = (d === 0 && this.a !== 0) ? [-this.b / 2 * this.a] : NaN;
            } else {
                const d_root = Math.sqrt(d);
                const t = 2 * this.a;
                res = [(-this.b + d_root) / t, (-this.b - d_root) / t];
            }

        } else {

            const caseC = this.c === 0 && this.a !== 0 && this.b !== 0
            const caseBC = this.b === 0 && this.c === 0 && this.a !== 0
            
            const t = -this.c / this.a
            const caseB = this.b === 0 && this.a !== 0 && this.c !== 0 && t > 0

            if (caseB) {
                res = [-Math.sqrt(t), Math.sqrt(t)]
            } else if (caseC) {
                res = [0, -this.b / this.a]
            } else if (caseBC) {
                res = [0]
            }


        }

        return res


    }
}
