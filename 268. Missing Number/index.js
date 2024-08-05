// const missingNumber = function (nums) {
//     nums.sort((a, b) => a - b)

//     for (let i = 0; i <= nums.length; i++) {
//         if (nums[i] !== i) {
//             return i
//         }
//     }

//     return 0
// };

function missingNumber(nums) {
    const n = nums.length;
    const expectedSum = (n * (n + 1)) / 2;
    const actualSum = nums.reduce((sum, num) => sum + num, 0);
    return expectedSum - actualSum;
}

// (7 * 8) / 2 = 28  ---> 0 + 1 + 2 + 3 + 4 + 5 + 6 + 7 = 28