var maxProfit = function (prices) {
    let highestDiff = 0
    let pointer = 0

    for (let i = 0; i <= prices.length - 1; i++) {
        if (prices[pointer] < prices[i]) {
            let currentDiff = prices[i] - prices[pointer]
            if (currentDiff > highestDiff) {
                highestDiff = currentDiff
            }
        }
        if (prices[pointer] > prices[i]) {
            pointer = i
        }
    }

    return highestDiff

};

console.log(maxProfit([0, 1, 0, 10]));