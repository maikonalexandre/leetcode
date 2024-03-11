var romanToInt = function (s) {
    const map = {
        I: 1,
        V: 5,
        X: 10,
        L: 50,
        C: 100,
        D: 500,
        M: 1000,
    };


    return s.split("").reduce((p, n, i) => {
        if (map[s[i]] < map[s[i + 1]]) {
            return p - map[s[i]];
        } else {
            return p + map[s[i]];
        }
    }, 0);

};