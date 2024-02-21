var singleNumber = function (nums) {
    const element = new Set()

    for (const num in nums) {
        if (element.has(nums[num])) {
            element.delete(nums[num])
        } else {
            element.add(nums[num])
        }
    }
    return element.values().next().value
};

console.log(singleNumber([0, 0, 1, 2, 2]));