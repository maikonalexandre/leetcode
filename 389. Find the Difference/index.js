var findTheDifference = function (s, t) {
    const map = new Map()

    for (const i in s) {
        const key = s[i]
        if (map.has(key)) {
            const previousValue = map.get(key)
            map.set(key, previousValue + 1)
        } else {
            map.set(key, 1)
        }
    }


    for (const i in t) {
        const key = t[i]
        if (map.has(key)) {
            const previousValue = map.get(key)

            if (previousValue === 0) {
                return key
            }

            map.set(key, previousValue - 1)
        } else {
            return key
        }
    }
};

console.log(findTheDifference("aabcd", "aabecd"))