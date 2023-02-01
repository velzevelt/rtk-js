function createArmy(unitsAmount) {
    const res = []

    function makeUnit(n) {
        
        const r = {
            n,
            hp: randomIntFromInterval(1, 100),
            armor: randomIntFromInterval(1, 100),
            attack: randomIntFromInterval(1, 100)
        }

        return JSON.stringify(r);
    }

    function randomIntFromInterval(min, max) {
        return Math.floor(Math.random() * (max - min + 1) + min)
    }

    for(let i = 0; i < unitsAmount; i++) {
        res.push( makeUnit(i) )
    }

    return res
}


const army = createArmy(5)
console.log(army)

// const list = toDoList()


function toDoList() {
    const res = []

    const makeTask = function (n, text, status) {
        res.push( {n, text, status} )
        return res
    }

    const getTaskStatus = n => {
        const r = res.find(obj => {return obj?.n === n})
        return r?.status
    }

    const markTaskAsCompleted = n => {
        const r = res.find(obj => {return obj?.n === n})
        r.status = "completed"
        return r
    }

    const markTaskAsDeleted = n => {
        const r = res.find(obj => {obj?.n === n})
        if (r?.status === "completed") {
            r.status = "deleted"
        }
        return r
    }

    const getActiveTasks = () => {
        const r = res.filter((obj) => obj?.status === "active")
        return r
    }

    const getDeletedTasks = () => {
        const r = res.filter((obj) => obj?.status === "deleted")
        return r
    }

    const getAllTasks = () => {
        return res
    }

    return {
        "makeTask": makeTask,
        "markTaskAsDeleted": markTaskAsDeleted,
        "markTaskAsCompleted": markTaskAsCompleted,
        "getTaskStatus": getTaskStatus,
        "getActiveTasks": getActiveTasks,
        "getDeletedTasks": getDeletedTasks,
        "getAllTasks": getAllTasks,

    }
    // return [makeTask, getStatus, removeCompletedTask, getActiveTasks]
}