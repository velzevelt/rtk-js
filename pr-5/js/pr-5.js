class Factorial {
    constructor(n) {
        this.n = n
    }

    calculate() {
        let res = NaN;

        try {
            if (Number.isInteger(this.n) && this.n > 0) {
                if (this.n === 0 || this.n === 1) {
                    res = 1;
                } else {
                    res = this.n * new Factorial(this.n - 1).calculate()
                }
            } else {
                throw new Error(`Неверное число ${this.n}. Факториал не существует`)
            }
        } catch (error) {
            console.error(error)
            throw new Error(error)
        }


        return res;
    }

    calculatePrompt() {
        this.n = Number.parseInt(prompt('Посчитать факториал для n'))
        try {
            alert(this.calculate())
        } catch (error) {
            alert(error)
        }
    }
}


class QuadEquation { 
    constructor(a, b, c) {
        this.a = a
        this.b = b
        this.c = c
    }

    solveEquation() {
        // Проверяем, полное ли это квадратное уравнение
        const full = [this.a, this.b, this.c].every( (val) => val !== 0 )

        if (full) {
            const d = this.b ** 2 - 4 * this.a * this.c
            
            if (d <= 0) {
                return (d === 0 && this.a !== 0) ? [-this.b / 2 * this.a] : NaN;
            } else {
                const d_root = sqrt(d);
                const t = 2 * this.a;
                return [(-this.b + d_root) / t, (-this.b - d_root) / t];
            }

        } else {
            if (this.b === 0 && -this.c/a > 0) {
                return [-sqrt(this.c / a), sqrt(this.c / a)]
            } else if (this.c === 0) {
                return [0, -this.b/a]
            } else if (this.b === 0 && this.c === 0) {
                return [0]
            }
        }

        


    }
}
