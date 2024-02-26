// var isPowerOfTwo = function (n) {
//     return n > 0 && (n & (n - 1)) === 0;
// };

var isPowerOfTwo = function (n) {
    if (n <= 0) return false;
    else if (n === 1) return true;
    else if (n % 2 !== 0) return false;
    else return isPowerOfTwo(n / 2)
}

console.log(isPowerOfTwo(2147483648))