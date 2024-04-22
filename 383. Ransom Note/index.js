var canConstruct = function (ransomNote, magazine) {
    const map = new Map()

    for (const l of magazine) {
        if (map.has(l)) {
            map.set(l, map.get(l) + 1)
        } else {
            map.set(l, 1)
        }
    }

    for (const l of ransomNote) {
        if (map.has(l)) {
            const v = map.get(l)
            if (v <= 0) {
                return false
            }
            map.set(l, v - 1)
        } else {
            return false
        }
    }

    return true
};

console.log(canConstruct("aa", "ab"));