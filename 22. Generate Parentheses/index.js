var generateParenthesis = function (n) {
    const result = []

    function build(s = "", l = 0, r = 0) {
        if (s.length == n * 2) {
            result.push(s)
            return
        }
        if (l < n) {
            build(s + "(", l + 1, r)
        }

        if (r < l) {
            build(s + ")", l, r + 1)
        }
    }


    build()
    return result
};

console.log(generateParenthesis(1));