const hammingWeight = (n) => {
    binaries = n.toString(2).split('')

    return binaries.reduce((acc, cur) => {
        return Number(acc) + Number(cur)
    }, 0)
};

console.log(hammingWeight(11));