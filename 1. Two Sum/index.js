var twoSum = function (nums, target) {
    let map = new Map();

    for (let n = 0; n < nums.length; n++) {
        const c = target - nums[n];

        if (map.has(c)) {
            return [n, map.get(c)];
        }

        map.set(nums[n], n);
    }
};