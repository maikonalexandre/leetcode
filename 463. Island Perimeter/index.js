var islandPerimeter = function (grid) {
    let perimeter = 0

    for (const j in grid) {
        for (const i in grid[j]) {
            if (grid[j][i] === 1) {
                perimeter += 4

                if (j > 0 && grid[j - 1][i] === 1) {
                    perimeter -= 2
                }

                if (i > 0 && grid[j][i - 1] === 1) {
                    perimeter -= 2
                }
            }
        }

    }

    return perimeter
};

console.log(islandPerimeter([[0, 1, 0, 0], [1, 1, 1, 0], [0, 1, 0, 0], [1, 1, 0, 0]]));


/*

 0,1,0,0 -> 3
 1,1,1,0 -> 6
 0,1,0,0 -> 2
 1,1,0,0 -> 5

            16

 7*4 = 28  28-16 = 12
 
 1. Verify before column is equal 1
 2. Verify before row is equal to 1  



*/