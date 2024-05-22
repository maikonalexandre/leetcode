// var licenseKeyFormatting = function (s, k) {
//     s = s.replaceAll("-", "").toUpperCase().trim()
//     let ns = ""

//     let counter = 0

//     for (let i = s.length - 1; i >= 0; i--) {
//         if (counter == k) {
//             ns = s[i] + "-" + ns
//             counter = 0
//         } else {
//             ns = s[i] + ns
//         }

//         counter++
//     }

//     return ns

// };

var licenseKeyFormatting = function (s, k) {
    s = s.replaceAll("-", "").toUpperCase().split("")

    for (let i = s.length - 1 - k; i >= 0; i -= k) {
        s[i] = s[i] + '-'
    }

    return s.join("")
};

console.log(licenseKeyFormatting("2-5g-3-J", 2))
