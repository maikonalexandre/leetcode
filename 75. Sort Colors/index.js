var numbers = [1, 2, 0]

var sortColors = function (nums) {
    let l = 0;
    let r = nums.length - 1;
    let p = 0;

    while (p <= r) {
        if (nums[p] == 0) {
            let tmp = nums[l]
            nums[l] = nums[p]
            nums[p] = tmp
            p++
            l++
        }

        else if (nums[p] == 2) {
            let tmp = nums[r]
            nums[r] = nums[p]
            nums[p] = tmp
            r--
        }

        else {
            p++
        }

    }
};



