function createArmy(unitsAmount) {
    const res = []

    for (let i = 0; i < unitsAmount; i++) {
        const unit = {
            n: i + 1,
            hp: Math.floor(Math.random() * 100),
            armor: Math.floor(Math.random() * 100),
            attack: Math.floor(Math.random() * 100)
        }

        const info = function() {
            const entries = Object.entries(unit)
            let info = ""
            entries.forEach((val) => { info += `${val[0]}: ${val[1]}, ` })
            info = info.slice(0, -2)
            return info
        }
       
        res[i] = info
    }


    return res
}

// Задание 1
const army = createArmy(5)
console.log(army)


// Задание 2
const list = toDoList()
wrapList(list)


function wrapList(list) {
    while (list) {
        const promptInput = prompt(list[0].execute() + "Что нужно сделать?")
        if (promptInput === null) {
            break
        }

        const separator = ", "
        const input = promptInput.split(separator)
        const command = input[0] //.toLowerCase()
        const argumets = input
        argumets.shift()

        // console.log(command, argumets)

        try {

            let commandOut = undefined
            if (isNaN(command)) {
                commandOut = list.find(c => c.name === command)?.execute(...argumets)
            }
            else {
                commandOut = list[command - 1]?.execute(...argumets)
            }


            if (typeof (commandOut) === 'string') {
                alert(commandOut)
            }
            else if (Array.isArray(commandOut)) {
                let parsedVals = ''
                commandOut.forEach(element => {
                    entries = Object.entries(element)
                    entries.forEach((v) => { parsedVals += `${v[0]}: ${v[1]}\n` })
                    parsedVals += '\n'
                })
                alert(parsedVals)
            }


        } catch (error) {
            alert(error)
        }
    }
}



function toDoList() {
    const tasks = []

    const makeTask = function (n, text) {
        const r = tasks.find(obj => { return obj.n === n })
        if (r === undefined) {
            if (n === undefined || text === undefined || n === '' || text === '') {
                console.warn("Не могу создать задачу, нужно больше данных")
                throw new Error("Не могу создать задачу, нужно больше данных")
            } else {
                // n = n.trim()
                // text = text.trim()
                tasks.push({ n, text, status: "active" })
            }
        } else {
            console.warn("Задача с этим номером уже существует!")
            throw new Error("Задача с этим номером уже существует!")
        }

        // return tasks
    }

    const getTaskStatus = function (n) {
        const r = tasks.find(obj => { return obj?.n === n })
        return r?.status
    }

    const markTaskAsCompleted = function (n) {
        const r = tasks.find(obj => { return obj?.n === n })
        r.status = "completed"
        return r
    }

    const markTaskAsDeleted = function (n) {
        const r = tasks.find(obj => { return obj?.n === n })
        if (r?.status === "completed") {
            r.status = "deleted"
        }
        else {
            throw new Error('Cannot delete active task, you shoud complete it first')
        }
        return r
    }

    const getActiveTasks = function () {
        const r = tasks.filter((obj) => obj?.status === "active")
        return r
    }

    const getDeletedTasks = function () {
        const r = tasks.filter((obj) => obj?.status === "deleted")
        return r
    }

    const getCompletedTasks = function () {
        const r = tasks.filter((obj) => obj?.status === "completed")
        return r
    }

    const getAllTasks = function () {
        return tasks
    }

    const toDoListOverlay = function () {
        let r = 'Возможности списка:\n'
        const keys = Object.entries(res)
        keys.forEach((element, key) => {
            r += `${key + 1})  ${element[1].name} ${element[1].args} ${element[1].description}\n`
        });


        return r
    }

    // const res = [
    //     Command('help', toDoListOverlay),
    //     Command("make task", makeTask, '[Номер задачи], [Текст]'),
    //     Command("mark task as completed", markTaskAsCompleted, '[Номер задачи], [Текст]'),
    //     Command("mark task as deleted", markTaskAsDeleted, '[Номер задачи], [Текст]'),
    //     Command("get active tasks", getActiveTasks),
    //     Command("get task status", getTaskStatus, '[Номер задачи]'),
    //     Command("get deleted tasks", getDeletedTasks),
    //     Command("get all tasks", getAllTasks),
    // ]

    const res = [
        Command("Справка", toDoListOverlay),
        Command("Создать задачу", makeTask, '[Номер задачи], [Текст]'),
        Command("Отметить задачу как завершенную", markTaskAsCompleted, '[Номер задачи]'),
        Command("Отметить задачу как удаленную", markTaskAsDeleted, '[Номер задачи]'),
        Command("Посмотреть активные задачи", getActiveTasks),
        Command("Посмотреть статус задачи", getTaskStatus, '[Номер задачи]'),
        Command("Посмотреть удаленные задачи", getDeletedTasks),
        Command("Посмотреть завершенные задачи", getCompletedTasks),
        Command("Посмотреть все задачи", getAllTasks),
    ]

    function Command(name, execute, args = '', description = '') {
        return { name, args, execute, description }
    }

    return res
}

