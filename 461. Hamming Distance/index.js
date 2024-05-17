var hammingDistance = function (x, y) {
    let result = 0

    let xor = x ^ y

    while (xor !== 0) {
        result += 1
        xor = xor & (xor - 1)
    }

    return result
};



var hammingDistance = function (x, y) {
    let bx = x.toString(2)
    let by = y.toString(2)
    let counter = 0

    if (bx.length < by.length) {
        while (bx.length < by.length) {
            bx = "0" + bx
        }
    } else {
        while (by.length < bx.length) {
            by = "0" + by
        }
    }

    for (const l in bx) {
        if (bx[l] != by[l]) {
            counter += 1
        }
    }

    return counter
};

console.log(hammingDistance(1, 4));
