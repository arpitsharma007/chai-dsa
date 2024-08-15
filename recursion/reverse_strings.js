// Reverse a string

// Iterative

// Hello

// function reverseString(str) {
//   let reverse = "";
//   let length = str.length - 1;

//   while (length >= 0) {
//     reverse += str[length];
//     length -= 1
//   }

//   return reverse.toLowerCase();
// }

// console.log(reverseString("Hello"))

function recursiveReverseString(string) {
  // base case
  if (string == "") {
    return;
  }

  // return string[string.length - 1] + recursiveReverseString(string.substring(0, string.length -1))

  let reversePart = recursiveReverseString(string.substring(0, string.length - 1))
  let result = string[string.length - 1] + reversePart

  console.log(`Reversing last char: ${string[string.length - 1]} added in front of ${reversePart} to form a result: ${result}`)

  return result
}

console.log(recursiveReverseString("Hello"));