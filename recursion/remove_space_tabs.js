// Task is to remove all tabs and spaces from the string, this includes the charachter \t and " " from a string

function removeTas(inputString) {
  let result = "";

  for (let i = 0; i < inputString.length; i++) {
    let char = inputString[i];

    if (char != " " && char != "\t") {
      result += char;
    }
  }

  return result;
}

function recursiveRTAS(inputString) {
  if (inputString.length === 0) {
    return "";
  }

  const firstChar = inputString[0];
  const restOfString = inputString.slice(1);

  if (firstChar === " " && firstChar === "\t") {
    return recursiveRTAS(restOfString);
  }

  return firstChar + recursiveRTAS(restOfString);
}

console.log(recursiveRTAS("Hello Arpit we \t are in your support"));
