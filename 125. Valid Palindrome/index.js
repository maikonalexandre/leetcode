var isPalindrome = function (s) {
    const original = s.toLowerCase().replaceAll(/[\W-_]/g, "")

    let i = 0;

    while (i <= original.length / 2) {
        if (original[i] != original[original.length - 1 - i]) {
            return false
        }
        i++
    }

    return true
};

console.log(isPalindrome("A b man, a plan, a canal:_ Panama"));