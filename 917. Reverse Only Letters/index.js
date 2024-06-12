var reverseOnlyLetters = function (s) {
    s = s.split("")

    let right = s.length - 1
    let left = 0

    while (left < right) {
        if (isLetter(s[left]) && isLetter(s[right])) {
            [s[left], s[right]] = [s[right], s[left]]

            left++
            right--

        }
        if (!isLetter(s[left])) {
            left++
        }

        if (!isLetter(s[right])) {
            right--
        }

    }

    function isLetter(scr) {
        return /^[a-zA-Z]$/.test(scr)
    }

    return s.join("");

};

reverseOnlyLetters(s = "a-bC-dEf-ghIj")