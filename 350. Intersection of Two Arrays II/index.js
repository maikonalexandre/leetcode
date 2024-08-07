console.time()
var intersect1 = function (nums1, nums2) {
    nums1.sort((a, b) => a - b)
    nums2.sort((a, b) => a - b)

    const max = Math.min(nums1.length, nums2.length)

    let p1 = 0;
    let p2 = 0;

    const arr = []

    while (p1 < max || p2 < max) {
        if (nums1[p1] === nums2[p2]) {
            arr.push(nums1[p1])
            p1++
            p2++
        }

        if (nums1[p1] > nums2[p2]) {
            p2++
        }

        if (nums1[p1] < nums2[p2]) {
            p1++
        }
    }


    return arr
};
console.timeEnd()

//time expected Exceeded


console.time()
var intersect = function (nums1, nums2) {
    const map = new Map()

    for (const e of nums1) {
        if (map.has(e)) {
            map.set(e, map.get(e) + 1)
        } else {
            map.set(e, 1)
        }

    }

    const arr = []

    for (const e of nums2) {
        if (map.has(e)) {
            const v = map.get(e)

            if (v >= 1) {
                arr.push(e)
                map.set(e, v - 1)
            }
        }
    }

    return arr
};
console.timeEnd()

console.log(intersect1(nums1 = [1, 2, 2, 1], nums2 = [2, 2]));
