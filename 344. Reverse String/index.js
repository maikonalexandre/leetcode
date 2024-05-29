s = ["h", "e", "l", "l", "o"]
expect = ["o", "l", "l", "e", "h"]

var reverseString = function (s) {
    let end = s.length - 1
    let start = 0

    while (end > start) {
        [s[start], s[end]] = [s[end], s[start]] // this is really nice

        start++
        end--
    }
};


reverseString(s)
