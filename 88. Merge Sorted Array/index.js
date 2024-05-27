nums1 = [1, 2, 3, 0, 0, 0]
nums2 = [2, 5, 6]

m = 3
n = 3

var merge = function (nums1, m, nums2, n) {
    let p2 = 0

    for (const i in nums1) {
        if (i > m && nums1[i] === 0) {
            nums1[i] = nums2[p2]
            p2++
        }
    }

    nums1.sort((a, b) => a - b)
};

merge(nums1, m, nums2, n)

console.log(nums1);