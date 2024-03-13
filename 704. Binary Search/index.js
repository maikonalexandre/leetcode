var search = function (nums, target, start = 0, end) {
    if (end === undefined) {
        end = nums.length - 1
    }

    let pointer = Math.floor((start + end) / 2)

    if (start >= end && nums[pointer] != target) {
        return -1
    }


    if (nums[pointer] == target) {
        return pointer
    }

    if (nums[pointer] < target) {
        start = pointer + 1
        return search(nums, target, start, end)
    }

    if (nums[pointer] > target) {
        end = pointer - 1
        return search(nums, target, start, end)
    }

};

console.log(search([-1, 0, 5], -1));



// var search = function(nums, target) {
//     left  = 0;
//     right = nums.length - 1;

//     while (left <= right) {
//         mid = Math.floor((left+right)/2);

//         if(nums[mid] == target){
//             return mid;
//         } else if (nums[mid] < target ) {
//             left = mid + 1;
//         } else {
//             right = mid -1;
//         }
//     }

//     return -1;

// };