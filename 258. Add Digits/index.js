var addDigits = function (num) {
    while (num > 10) {
        num = num.toString().split("").reduce((a, n) => {
            return Number(a) + Number(n)
        }, 0)
    }

    return num
};

console.log(addDigits(12789));