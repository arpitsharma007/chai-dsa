// Arr = [3, 4, 1, 8, 1, 7]
// Find me = 1
// Current Index = 0
// -> Output = 2
// If not found = -1

function firstOccurance(arr, findMe, currIndex) {
  while (currIndex < arr.length) {
    if (arr[currIndex] === findMe) {
      return currIndex;
    }
    currIndex++;
  }

  return -1;
}

console.log(firstOccurance([3, 4, 1, 8, 1, 7], 1, 0));

