var flipAndInvertImage = function (image) {
    return image.map(arr => {
        return arr.reverse().map(e => e == 0 ? 1 : 0)
    })
};

console.log(flipAndInvertImage(image = [[1, 1, 0], [1, 0, 1], [0, 0, 0]]));