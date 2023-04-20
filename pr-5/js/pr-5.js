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
                throw new Error('Invalid factorial')
            }
        } catch (error) {
            console.error(error)
        }
        
        
        return res; 
    } 
}

const fac = new Factorial(3)

// class QuadEquation { }
