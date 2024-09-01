// [1, 2, 4, 2, 4, 2, 6]

function countkeyIA(array, key) {
  let count = 0;

  for (let i = 0; i < array.length; i++) {
    if (array[i] === key) {
      count++;
    }
  }

  return count;
}

function recursiveCountKeyIA(array, key, index = 0) {
  if (index >= array.length) {
    return 0;
  }

  if (array[index] === key) {
    return 1 + recursiveCountKeyIA(array, key, index + 1);
  }

  return recursiveCountKeyIA(array, key, index + 1);
}

console.log(recursiveCountKeyIA([1, 2, 4, 2, 4, 2, 6], 2, 0));
