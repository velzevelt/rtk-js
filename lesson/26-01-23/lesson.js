function modifyArray() {
    const arr = []

    
    const add = function (n) {
        arr.push(n)
        return arr
    } 
    const remove = function () {
        arr.pop()
        return arr
    }
    const edit = function (id, replace) {
        arr[id] = replace
        return arr
    }

    return [add, remove, edit]
}

const f = modifyArray()
