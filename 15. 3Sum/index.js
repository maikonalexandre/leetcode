var threeSum = function (nums) {
    const result = []

    for (const i in nums.sort((a, b) => a - b)) {
        if (nums[i] == nums[i - 1]) {
            continue
        }

        let l = Number(i) + 1
        let r = nums.length - 1

        while (l < r) {
            const sum = nums[i] + nums[r] + nums[l]

            if (sum > 0) {
                r--
            }
            if (sum < 0) {
                l++
            }

            if (sum === 0) {
                result.push([nums[i], nums[r], nums[l]])
                l++
                while (nums[l] == nums[l - 1] && l < r) {
                    l++
                }
            }
        }
    }

    return result
};

console.log(threeSum([-1, 0, 1, 2, -1, -4]));