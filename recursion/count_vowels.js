// Count vowels in a string

function isVowel(charachter) {
  let lowerChar = charachter.toLowerCase();
  let vowels = "aeiou";

  if (vowels.indexOf(lowerChar) != -1) {
    return true;
  } else {
    return false;
  }
}

function countVowels(string) {
  let count = 0;

  for (let i = 0; i < string.length; i++) {
    if (isVowel(string[i])) {
      count += 1;
    }
  }
  return count;
}

// console.log(countVowels("hello my name is arpit"));
// console.log(countVowels("hello"));

function recursiveCountVowels(string, stringLength) {
  console.log(
    `Length: ${stringLength}, current string is: ${string.substring(
      0,
      stringLength
    )}`
  );

  if (stringLength === 1) {
    return Number(isVowel(string[0]));
  }

  // return (
  //   recursiveCountVowels(string, stringLength - 1) +
  //   isVowel(string[stringLength - 1])
  // );

  let result =
    recursiveCountVowels(string, stringLength - 1) +
    isVowel(string[stringLength - 1]);
  console.log(
    `Count after checking ${
      string[stringLength - 1]
    } : Result: ${result} Length: ${stringLength}`
  );
  return result;
}

console.log(recursiveCountVowels("hello", "hello".length));
