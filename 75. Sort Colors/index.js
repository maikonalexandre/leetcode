var numbers = [1, 2, 0]

var sortColors = function (nums) {
    let zeroPointer = 0;
    let twoPointer = nums.length - 1;
    let i = 0;
    while (i < nums.length) {
        while (nums[zeroPointer] == 0) {
            zeroPointer++;
        }
        while (nums[twoPointer] == 2) {
            twoPointer--;
        }
        if (nums[i] == 0 && i > zeroPointer) {
            let temp = nums[i];
            nums[i] = nums[zeroPointer];
            nums[zeroPointer] = temp;
        } else if (nums[i] == 2 && i < twoPointer) {
            let temp = nums[i];
            nums[i] = nums[twoPointer];
            nums[twoPointer] = temp;
        } else {
            i++;
        }
    }
};



