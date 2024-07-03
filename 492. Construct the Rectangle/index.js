var constructRectangle = function (area) {
    let left = Math.floor(Math.sqrt(area))

    while (true) {
        if (Number.isInteger(area / left)) {
            return [area / left, left]
        } else {
            left--
        }
    }
};

// var constructRectangle = function (area) {
//     let width = Math.floor(Math.sqrt(area));
//     for (let i = width; i > 0; i--) {
//         if (area % i === 0) {
//             return [area / i, i];
//         }
//     }
// };