// var validPalindrome = function (s) {
//     let start = 0
//     let end = s.length - 1

//     while (end >= start) {
//         if (s[end] !== s[start]) {
//             return isPalindrome(s, start + 1, end) || isPalindrome(s, start, end - 1)
//         }
//         start++
//         end--
//     }

//     return true
// };

// var isPalindrome = (s, start, end) => {
//     while (end >= start) {
//         if (s[end] !== s[start]) {
//             return false
//         }
//         start++
//         end--
//     }

//     return true
// }

function validPalindrome(s) {
    let start = 0, end = s.length - 1;
    while (start < end) {
        if (s[start] != s[end])
            return isPalindrome(start + 1, end) || isPalindrome(start, end - 1);
        start++; end--;
    }
    return true;

    function isPalindrome(start, end) {
        while (start < end) {
            if (s[start] != s[end]) return false;
            start++; end--;
        }
        return true;
    }
}


console.log(validPalindrome(s = "abc"))