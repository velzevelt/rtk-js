function createArmy(unitsAmount) {
    const res = []

    for (let i = 0; i < unitsAmount; i++) {
        const unit = {
            n: i + 1,
            hp: Math.floor(Math.random() * 100),
            armor: Math.floor(Math.random() * 100),
            attack: Math.floor(Math.random() * 100)
        }

        const info = function () {
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
        const promptInput = prompt(list.find(c => c.name === "Справка").execute() + "Что нужно сделать?")
        if (promptInput === null) {
            break
        }

        const command = promptInput

        try {

            let commandOut = undefined
            if (isNaN(command)) {
                commandOut = list.find(c => c.name === command)?.execute()
            }
            else {
                commandOut = list[command - 1]?.execute()
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

    // Вспомогательная функция
    const getTaskNumberPromt = function () {
        while (true) {
            try {
                n = prompt("Введите номер задачи")
                if (!isFinite(parseInt(n))) {
                    throw new Error("Указан неверный тип данных для номера, ожидается число")
                } else {
                    break
                }

            }
            catch (error) {
                alert(error)
            }
        }

        return n
    }

    // Вспомогательная функция
    const getTaskNamePromt = function () {
        while (true) {
            try {
                text = prompt("Введите название для задачи")
                if (typeof (text) !== "string") {
                    throw new Error("Указан неверный тип данных для названия задачи, ожидается строка")
                } else {
                    break
                }
            }
            catch (error) {
                alert(error)
            }
        }

        return text
    }


    const makeTask = function () {
        while (true) {
            try {
                n = getTaskNumberPromt()
                if (tasks.find(obj => { return obj?.n === n })) {
                    throw new Error("Задача с данным номером уже существует, используйте другой номер")
                } else {
                    break
                }
            }
            catch (error) {
                alert(error)
            }
        }

        const text = getTaskNamePromt()
        const task = { n, text, status: "active" }
        tasks.push(task)

        return "Задача успешно создана"
    }

    const getTaskStatus = function () {
        const n = getTaskNumberPromt()
        const r = tasks.find(obj => { return obj?.n === n })
        return r?.status || "Задача с таким номером не найдена"
    }

    const markTaskAsCompleted = function () {
        const n = getTaskNumberPromt()
        const r = tasks.find(obj => { return obj?.n === n })
        if (r !== undefined) {
            r.status = "completed"
        } else {
            throw new Error('Задача с таким номером не найдена')
        }

        return `Статус задачи ${r.n} -> ${r.status}`
    }

    const markTaskAsDeleted = function () {
        const n = getTaskNumberPromt()
        const r = tasks.find(obj => { return obj?.n === n })

        if (r !== undefined) {
            if (r?.status === "completed") {
                r.status = "deleted"
            }
            else {
                throw new Error('Нельзя удалить активную задачу, сперва её нужно завершить')
            }
        } else {
            throw new Error("Задача с таким номером не найдена")
        }
        
        return `Статус задачи ${r.n} -> ${r.status}`
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
            r += `${key + 1})  ${element[1].name}\n`
        });


        return r
    }

    const res = [
        Command("Справка", toDoListOverlay),
        Command("Создать задачу", makeTask),
        Command("Отметить задачу как завершенную", markTaskAsCompleted),
        Command("Отметить задачу как удаленную", markTaskAsDeleted),
        Command("Посмотреть активные задачи", getActiveTasks),
        Command("Посмотреть статус задачи", getTaskStatus),
        Command("Посмотреть удаленные задачи", getDeletedTasks),
        Command("Посмотреть завершенные задачи", getCompletedTasks),
        Command("Посмотреть все задачи", getAllTasks),
    ]

    function Command(name, execute) {
        return { name, execute }
    }

    return res
}

