var maxArea = function (height) {
    let maxArea = 0
    let l = 0
    let r = height.length - 1
    while (l < r) {
        const minBar = Math.min(height[l], height[r])
        const area = minBar * (r - l)
        maxArea = Math.max(area, maxArea)

        if (height[l] > height[r]) {
            r--
        } else {
            l++
        }
    }

    return maxArea
};

