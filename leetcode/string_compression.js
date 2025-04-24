var compress = function (chars) {
  let newCharsArr = [];
  let currentChar = "";
  let count = 0;

  for (let i = 0; i < chars.length; i++) {
    currentChar = chars[i];
    if (currentChar !== chars[i + 1] || i === chars.length) {
      count++;
      newCharsArr.push(currentChar);
      if (count > 1) {
        newCharsArr.push(count.toString());
      }
      count = 0;
    } else {
      count++;
    }
  }

  // console.log(newCharsArr);

  return newCharsArr;
};

console.log(compress(["a", "a", "b", "b", "c", "c", "c"]));
