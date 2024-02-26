var containsDuplicate = function (nums) {
    const verified = new Set()

    for (const key in nums) {
        if (verified.has(nums[key])) {
            return true
        }

        verified.add(nums[key])
    }

    return false
};

console.log(containsDuplicate([1, 2, 1, 0]));