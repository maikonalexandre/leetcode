// var firstUniqChar = function (s) {
//     const map = {}

//     for (const char in s) {
//         if (!map[s[char]]) {
//             map[s[char]] = { lastIndex: char, quant: 1 }
//         } else {
//             map[s[char]].lastIndex = char
//             map[s[char]].quant += 1
//         }
//     }

//     const n = map[Object.keys(map).find(e => map[e].quant == 1)]

//     return n == undefined ? -1 : n.lastIndex
// };

var firstUniqChar = function (s) {
    const map = {}

    for (const char in s) {
        if (!map[s[char]]) {
            map[s[char]] = 1
        } else {
            map[s[char]] += 1
        }
    }

    for (const i in s) {
        console.log(map[s[i]]);
        if (map[s[i]] === 1) {
            return i
        }
    }


    return -1
};


console.log(firstUniqChar("loveleetcode"));


