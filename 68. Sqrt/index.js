function mySqrt(X) {
  let left = 0;
  let right = X == 1 ? X : Math.floor(X / 2);

  while (left <= right) {
    let med = Math.floor((left + right) / 2);

    if (med * med < X) {
      left = med + 1;
    } else if (med * med > X) {
      right = med - 1;
    } else {
      return med;
    }
  }

  return right;
}

console.log(mySqrt(6) == 2);
