var isSubsequence = function (s, t) {
    let sp = 0
    let tp = 0

    while (tp < t.length && sp < s.length) {
        if (s[sp] === t[tp]) {
            tp++
            sp++
        } else {
            tp++
        }
    }

    return sp === s.length
};

console.log(isSubsequence("abc", "aaaabc"));