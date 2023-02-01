function createArmy(unitsAmount) {
    const res = []

    function makeUnit(n, hp, armor, attack) {
        
        return {
            n,
            hp,
            armor,
            attack
        }
        
    }

    function randomIntFromInterval(min, max) {
        return Math.floor(Math.random() * (max - min + 1) + min)
    }

    for(let i = 0; i < unitsAmount; i++) {
        res.push( makeUnit( i, randomIntFromInterval(1, 100), randomIntFromInterval(1, 100), randomIntFromInterval(1, 100) ) )
    }

    return res
}


// const army = createArmy(5)
// console.log(army)
// toDoList().makeTask(1, '123', 'active')
const list = toDoList()[0](1, '123', 'active')
console.log(list)

function toDoList() {
    const res = []

    const task = {
        n: 0,
        text: "",
        status: ""
    }


    const makeTask = function (n, text, status) {
        res.push(Object.create(task, n, text, status))
        return res
    }

    const getStatus = function(n) {
        const r = res.filter(obj => {return obj.n === n})
        return r[0]
    }


    return [makeTask, getStatus]
}