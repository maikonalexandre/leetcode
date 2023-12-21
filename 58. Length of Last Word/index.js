var lengthOfLastWord = function (s) {
  const arr = s.trimEnd().split(" ");
  return arr[arr.length - 1].length;
};

console.log(lengthOfLastWord("   fly me   to   the moon  ") === 4);
