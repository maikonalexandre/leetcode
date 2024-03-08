var isPalindrome = function (x) {
    if (x < 0) return false;

    const arr = [];
    const n = x;
    while (x > 0) {
        const digit = x % 10;
        arr.unshift(digit);
        x = Math.floor(x / 10);
    }

    return Number(arr.reverse().join("")) == n;
};