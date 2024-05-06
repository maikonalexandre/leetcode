var canJump = function (nums) {
    if (nums.length == 1) return true

    let index = 0;
    let maxJump = 0;

    while (nums.length - 1 > maxJump & nums.length - 1 > index) {
        maxJump = Math.max(maxJump, nums[index] + index)

        if (nums[index] == 0 & index >= maxJump) {
            return false
        }

        index++
    }


    return true
};


/*
    var canJump = function(nums) {
        if (nums.length == 1) return true
        let max = 0
        for (let i = 0; i < nums.length; i++) {
            if (i > max) return false
            max = Math.max(max, i + nums[i])
            if (max >= nums.length - 1) return true;
        }
        return false;
    };
*/

console.log(canJump([1, 1, 2, 2, 0, 1, 1]));


