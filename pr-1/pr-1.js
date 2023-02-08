function createArmy(unitsAmount) {
    const res = []

    const units = []
    for(let i = 0; i < unitsAmount; i++) {
        units.push(new Unit(i))
    }

    function Unit(n) {
        this.n = n + 1
        this.hp = Math.floor(Math.random() * 100)
        this.armor = Math.floor(Math.random() * 100)
        this.attack = Math.floor(Math.random() * 100)

        this.getUnitInfo = () => {

            const entries = Object.entries(this)
            const stats = entries.filter( (val) => typeof val[1] !== "function" )
            let res = ""
            stats.forEach( (val) => { res += `${val[0]}: ${val[1]}, ` } )

            res = res.slice(0, -2)

            return res
        }
    } 

    for(let i = 0; i < unitsAmount; i++) {
        res.push( units[i].getUnitInfo )
    }

    return res
}


const army = createArmy(5)
// console.log(army)

const list = toDoList()


function toDoList() {
    const tasks = []

    const makeTask = function (n, text) {
        const r = tasks.find(obj => {return obj?.n === n})
        if (r === undefined) {
            tasks.push( {n, text, status: "active" } )
        } else {
            console.warn("Task with this number already exists!")
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