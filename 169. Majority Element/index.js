var majorityElement = function (nums) {
    const map = new Map()

    for (const i in nums) {
        if (map.has(nums[i])) {
            map.set(nums[i], map.get(nums[i]) + 1)
        } else {
            map.set(nums[i], 1)
        }
    }

    let biggestKey = null
    let biggestValue = 0

    for ([key, value] of map) {
        if (value > biggestValue) {
            biggestKey = key;
            biggestValue = value
        }
    }

    return biggestKey
};


console.log(majorityElement([2, 2, 1, 1, 1, 2, 2]));


// var majorityElement = function(nums) {
//     const map = new Map()
//     var tmp = 0
//     for (i = 0; i < nums.length; i++) {
//         if (!map.has(nums[i])) {
//             map.set(nums[i], 1)
//         }
//         else {
//             map.set(nums[i], map.get(nums[i]) + 1 )
//         }
//     }
//     map.forEach((value, key) => {
//         if (value > nums.length / 2) {
//             tmp = key
//         }
//     })
//     return tmp
// };