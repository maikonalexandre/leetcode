var intersection = function (nums1, nums2) {
    const set = new Set(nums1)
    const set2 = new Set(nums2)

    let result = []

    set2.forEach((v) => {
        if (set.has(v)) {
            result.push(v)
        }
    })

    return result
};

console.log(intersection(nums1 = [1, 2, 2, 1], nums2 = [2, 2]));