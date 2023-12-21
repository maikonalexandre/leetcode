/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function (digits) {
  const plusOneArray = [];
  let numberOnHand = 1;
  for (let counter = digits.length - 1; counter >= 0; counter--) {
    if (digits[counter] + numberOnHand == 10) {
      numberOnHand = 1;
      plusOneArray.unshift(0);
    } else {
      plusOneArray.unshift(digits[counter] + numberOnHand);
      numberOnHand = 0;
    }
  }
  numberOnHand == 1 && plusOneArray.unshift(1);
  return plusOneArray;
};

function _plusOne(digits) {
  let n = digits.length;
  for (let i = n - 1; i >= 0; i--) {
    if (digits[i] < 9) {
      digits[i]++;
      return digits;
    } else {
      digits[i] = 0;
    }
  }

  digits.unshift(1);
  return digits;
}

console.log(plusOne([9, 9]));
