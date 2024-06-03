var backspaceCompare = function (s, t) {
    let ns = [""]
    let nt = [""]

    for (let i in s) {
        if (s[i] === "#") {
            ns.pop()
        } else {
            ns.push(s[i])
        }
    }

    for (let i in t) {
        if (t[i] === "#") {
            nt.pop()
        } else {
            nt.push(t[i])
        }
    }

    return ns.join("") === nt.join("")
};

backspaceCompare("ab#c", "ad#c")