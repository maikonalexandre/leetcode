var climbStairs = function (factor) {
    if (factor <= 2) {
        return factor
    }

    let lastResult = 2
    let penultimate = 1

    for (let index = 3; index <= factor; index++) {
        lastResult = lastResult + penultimate
        penultimate = lastResult - penultimate
    }

    return lastResult
};

console.log(climbStairs(7))