function createArmy(unitsAmount) {
    const tasks = []

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
        tasks.push( makeUnit(i) )
    }

    return tasks
}


// const army = createArmy(5)
// console.log(army)

const list = toDoList()


function toDoList() {
    const tasks = []

    const makeTask = function (n, text) {
        const r = tasks.find(obj => {return obj?.n === n})
        if (r === undefined) {
            tasks.push( {n, text, status: "active" } )
        } else {
            console.error("Task with this number already exists!")
        }

        return tasks
    }

    const getTaskStatus = function(n) {
        const r = tasks.find(obj => {return obj?.n === n})
        return r?.status
    } 

    const markTaskAsCompleted = function(n) {
        const r = tasks.find(obj => {return obj?.n === n})
        r.status = "completed"
        return r
    }

    const markTaskAsDeleted = function(n) {
        const r = tasks.find(obj => {return obj?.n === n})
        if (r?.status === "completed") {
            r.status = "deleted"
        }
        return r
    }

    const getActiveTasks = function() {
        const r = tasks.filter((obj) => obj?.status === "active")
        return r
    }

    const getDeletedTasks = function() {
        const r = tasks.filter((obj) => obj?.status === "deleted")
        return r
    }

    const getAllTasks = function() {
        return tasks
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