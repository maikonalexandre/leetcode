var wordPattern = function (pattern, s) {
    const words = s.split(' ')

    const m1 = new Map()
    const m2 = new Map()

    if (words.length != pattern.length) {
        return false
    }

    for (const i in words) {
        if (m1.has(words[i])) {
            const value = m1.get(words[i])

            if (value != pattern[i]) {
                return false
            }
        }

        else if (m2.has(pattern[i])) {
            const value = m1.get(pattern[i])

            if (value != words[i]) {
                return false
            }
        }

        else {
            m1.set(words[i], pattern[i])
            m2.set(pattern[i], words[i])
        }
    }


    return true
};

console.log(wordPattern("jquery", "jquery"))