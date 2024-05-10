var arrangeCoins = function (n) {
    let i = 1
    let counter = 0

    while (n - i >= 0) {
        counter = i
        n = n - i;
        i = i + 1
    }

    return counter
};

console.log(arrangeCoins(5));

// var arrangeCoins = function (n) {
//     let count = 0
//     for (let i = 1; i <= n; i++) {
//         n = n - i
//         if (n >= 0) {
//             count++
//         }
//     }
//     return count
// };