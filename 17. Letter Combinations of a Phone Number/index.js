var letterCombinations = function (digits) {
    const keypad = {
        "2": ["a", "b", "c"],
        "3": ["d", "e", "f"],
        "4": ["g", "h", "i"],
        "5": ["j", "k", "l"],
        "6": ["m", "n", "o"],
        "7": ["p", "q", "r", "s"],
        "8": ["t", "u", "v"],
        "9": ["w", "x", "y", "z"],
    }
    const res = []

    const backtrack = (i, current) => {
        if (current.length === digits.length) {
            res.push(current)
            return
        }

        for (const c of keypad[digits[i]]) {
            backtrack(i + 1, current + c)
        }
    }

    digits && backtrack(0, "")

    return res
};

console.log(letterCombinations("55"));
