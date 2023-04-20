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


// class QuadEquation { }
