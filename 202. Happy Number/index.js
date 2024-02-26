/* 
7 -> 49   16 + 81
97 -> 81 + 49 
130 -> false -> 1 + 9
10 -> 1 -> true

2 -> 4
16 -> false -> 1 + 36
37 -> 9 + 49
58 -> 25 + 64
89 -> 64 + 81 
145 -> 1 + 16 + 25 
42 -> 16 + 4
20 -> 4 começa o loop
16 -> 
*/


function calc(num) {
    const str = num.toString()
    let sum = 0;
    for (const key in str) {
        sum = sum + (Number(str[key]) ** 2)
    }

    return sum
}

var isHappy = function (n) {
    const nums = new Set()
    while (true) {
        n = calc(n)
        if (nums.has(n) || n == 1) {
            return n == 1
        }
        nums.add(n)
    }
};


