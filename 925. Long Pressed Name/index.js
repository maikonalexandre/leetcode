var isLongPressedName = function (name, typed) {
    n = 0
    t = 0

    while (t <= typed.length) {
        if (name[n] == typed[t]) {
            n++
            t++
        } else {
            if (name[n - 1] == typed[t]) {
                t++
            } else {
                return false
            }
        }
    }

    return true
};

console.log(isLongPressedName(name = "alex", typed = "aaleexa"));

// alex
// aaleex