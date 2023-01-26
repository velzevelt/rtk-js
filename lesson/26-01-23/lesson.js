function add2Array(n) {
    const arr = []
    arr.push(n)

    return ((n) => arr)(n)
    
}

const ar = add2Array(2)

console.log(ar)