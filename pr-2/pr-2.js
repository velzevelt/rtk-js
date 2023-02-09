
let armies = []

for(let i = 0; i < 30; i++) {
    armies.push(new Army(i + 1, 3))
}

const game = new Game(armies)
console.log(game)


class Game {
    constructor(armies) {
        this.armies = armies
        this.rounds = 3

        for (let i = 1; i <= this.rounds; i++) {
            this.play()
            this.armies = armies
        }
    }
}

