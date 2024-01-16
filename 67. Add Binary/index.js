var addBinary = function (a, b) {
  let hand = 0;
  let str = "";

  for (let i = a.length - 1, j = b.length - 1; i >= 0 || j >= 0; j--, i--) {
    let res = ((Number(a[i])) || 0) + ((Number(b[j])) || 0) + hand
    str = (res % 2) + str
    hand = res > 1 ? 1 : 0
  }

  return hand > 0 ? hand + str : str
};

console.log(addBinary("11", "1") == "100");

var _addBinary = function (a, b) {
  return (BigInt(`0b${a}`) + BigInt(`0b${b}`)).toString(2)
};
