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
const list = toDoList()["makeTask"](1, '123', 'active')
console.log(list)

function toDoList() {
    const res = []

    const makeTask = function (n, text, status) {
        res.push( {n, text, status} )
        return res
    }

    const getStatus = n => {
        const r = res.find(obj => {obj?.n == n})
        return r?.status
    }

    const removeCompletedTask = n => {
        let r = res.find(obj => {obj?.n == n})
        if (r?.status === "completed") {
            r?.status = "deleted"
        }
    }

    const getActiveTasks = () => {
        const r = []
        res.forEach((val) => {
            if (val?.status === "active") {
                r.push(val)
            }
        })
        return r
    }

    const getDeletedTasks = () => {
        const r = []
        res.forEach((val) => {
            if (val?.status === "deleted") {
                r.push(val)
            }
        })
        return r
    }

    const getAllTasks = () => {
        const r = [...res]
        return r
    }

    return {
        "makeTask": makeTask,
        "getStatus": getStatus,
        "removeCompletedTask": removeCompletedTask,
        "getActiveTasks": getActiveTasks,
        "getDeletedTasks": getDeletedTasks,
        "getAllTasks": getAllTasks

    }
    // return [makeTask, getStatus, removeCompletedTask, getActiveTasks]
}