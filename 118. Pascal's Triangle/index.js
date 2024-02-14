function fillNewArr(arr) {
    const newArr = Array.from(arr, (e, i) => {
        const n = e + (arr[i + 1] || 0)
        return n
    })

    newArr.unshift(1)
    return newArr
}

var generate = function (numRows) {
    let arr = [[1]]
    let last = [1]

    while (arr.length < numRows) {
        last = fillNewArr(last)
        arr.push(last)
    }

    return arr
};

console.log(generate([5]));