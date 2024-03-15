var removeDuplicates = function (nums) {
    let pos = 0;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] != nums[i + 1]) {
            nums[++pos] = nums[i + 1]
        }
    }
    return pos
};