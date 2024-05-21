var findComplement = function (num) {
    let n = ""

    for (const l of num.toString(2)) {
        l == "0" ? n += "1" : n += "0"
    }

    return parseInt(n, 2)
};


console.log(findComplement(5));