var isAnagram = function (s, t) {
    if (s.length !== t.length) {
        return false;
    }
    return s.split("").sort().join("") == t.split("").sort().join("")
};

console.log(isAnagram("abacaxi", "ixacaba"));

//another solution

const isAnagram2 = () => {
    if (s.length !== t.length) {
        return false;
    }


    const charCount = {};

    for (const char of s) {
        charCount[char] = (charCount[char] || 0) + 1;
    }

    for (const char of t) {
        if (charCount[char]) {
            charCount[char]--;
        } else {
            return false;
        }
    }

    for (const count of Object.values(charCount)) {
        if (count !== 0) {
            return false;
        }
    }

    return true;
}