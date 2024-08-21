var lengthOfLongestSubstring = (s) => {
    if (s.length < 2) {
        return s.length
    }
    const map = new Map()
    let l = 0, r = 0, d = 0;

    while (r < s.length) {
        const key = s[r]

        if (map.has(key)) {
            const i = map.get(key)
            map.set(key, r)
            if (i >= l) {
                l = i + 1
            }
        }

        map.set(key, r)
        d = Math.max(d, r - l + 1)
        r++
    }

    return d
};

//tmmzuxt -> 5
//"aabbaab!bb" -> 3 

// abcabcbb -> 3
// pwwkew -> 3

console.log(lengthOfLongestSubstring("tmmzuxt"))