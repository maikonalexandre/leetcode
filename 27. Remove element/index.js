var removeElement = function (numbers, val) {
    const j = []
    for (const n in numbers) {
        if (numbers[n] != val) {
            j.push(numbers[n])
        }
    }

    return j
};

console.log(removeElement([3, 2, 2, 3], 3));