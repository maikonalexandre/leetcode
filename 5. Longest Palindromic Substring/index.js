var longestPalindrome = function (s) {
    let result = ""

    for (const i in s) {
        const str = expandPalindrome(Number(i), Number(i))
        const str2 = expandPalindrome(Number(i), Number(i) + 1)

        if (str.length > result.length) {
            result = str
        }

        if (str2.length > result.length) {
            result = str2
        }
    }


    return result




    function expandPalindrome(left, right) {
        while (left >= 0 && right < s.length) {
            if (s[left] == s[right]) {
                left--
                right++
            } else {
                break
            }
        }
        return s.slice(left + 1, right)
    }
};



console.log("RETURN", longestPalindrome(s = "cbbd"));