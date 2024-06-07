var firstPalindrome = function (words) {
    for (const w of words) {
        const palindrome = verifyPalindrome(w)
        if (palindrome) {
            return w
        }
    }

    return false
};

function verifyPalindrome(word) {
    for (let left = 0, right = word.length - 1; right >= left; right--, left++) {
        if (word[left] != word[right]) {
            return false
        }
    }

    return true
}

console.log(firstPalindrome(words = ["abc", "car", "ada", "racecar", "cool"]));

