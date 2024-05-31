var reverseVowels = function (s) {
    const vowels = "AEIOUaeiou"

    let end = s.length - 1
    let start = 0

    s = s.split("")

    while (end > start) {
        if (!vowels.includes(s[start])) {
            start++
        }

        if (!vowels.includes(s[end])) {
            end--
        }

        if (vowels.includes(s[start]) && vowels.includes(s[end])) {
            [s[start], s[end]] = [s[end], s[start]]

            end--
            start++
        }
    }


    return s.join("")
};


reverseVowels("leetcode")