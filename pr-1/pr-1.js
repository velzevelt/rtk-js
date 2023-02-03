function createArmy(unitsAmount) {
    const res = []

    function makeUnit(n) {
        
        const r = {
            n,
            hp: Math.floor(Math.random() * 100),
            armor: Math.floor(Math.random() * 100),
            attack: Math.floor(Math.random() * 100)
        }

        return JSON.stringify(r);
    }

    for(let i = 0; i < unitsAmount; i++) {
        res.push( makeUnit(i) )
    }

    return res
}


// const army = createArmy(5)
// console.log(army)

const list = toDoList()


function toDoList() {
    const res = []

    const makeTask = function (n, text) {
        res.push( {n, text, status: "active" } )
        return res
    }

    const getTaskStatus = function() {
        const r = res.find(obj => {return obj?.n === n})
        return r?.status
    }

    const markTaskAsCompleted = function(n) {
        const r = res.find(obj => {return obj?.n === n})
        r.status = "completed"
        return r
    }

    const markTaskAsDeleted = function(n) {
        const r = res.find(obj => {return obj?.n === n})
        if (r?.status === "completed") {
            r.status = "deleted"
        }
        return r
    }

    const getActiveTasks = function() {
        const r = res.filter((obj) => obj?.status === "active")
        return r
    }

    const getDeletedTasks = function() {
        const r = res.filter((obj) => obj?.status === "deleted")
        return r
    }

    const getAllTasks = function() {
        return res
    }

    return {
        "makeTask": makeTask,
        "addTask": makeTask,
        "markTaskAsDeleted": markTaskAsDeleted,
        "markTaskAsCompleted": markTaskAsCompleted,
        "getTaskStatus": getTaskStatus,
        "getActiveTasks": getActiveTasks,
        "getDeletedTasks": getDeletedTasks,
        "getAllTasks": getAllTasks,

    }
    // return [makeTask, getStatus, removeCompletedTask, getActiveTasks]
}