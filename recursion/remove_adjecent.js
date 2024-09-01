// Remove all adjecent duplicates
// let input = "aabcc"

function removeAdjDup(inputString) {
  let result = "";

  for (let i = 0; i < inputString.length; i++) {
    if (i === inputString.length - 1 || inputString[i] !== inputString[i + 1]) {
      result += inputString[i];
    }
  }

  return result;
}

console.log(removeAdjDup("aabccaaaaabbbbbbddddddd"));

function recursiveRemoveAdjDup(inputString) {
  if (inputString.length <= 1) {
    return inputString;
  }

  if (inputString[0] === inputString[1]) {
    recursiveRemoveAdjDup(inputString.substring(1));
  }

  return recursiveRemoveAdjDup(
    inputString[0] + recursiveRemoveAdjDup(inputString.substring(1))
  );
}

// TODO: Remove both adjecent duplicate
