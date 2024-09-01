// let input = ["(", "(", ")", ")", "(", ")"];
let input = ["(", ")", ")", "(", ")", ")", "(", ")"];

function balancePar(array, startIndex = 0, currentIndex = 0) {
  if (startIndex === array.length) {
    return currentIndex === 0;
  }

  if (currentIndex < 0) {
    return false;
  }

  if (array[startIndex] === "(") {
    return balancePar(array, startIndex + 1, currentIndex + 1);
  } else if (array[startIndex] === ")") {
    return balancePar(array, startIndex + 1, currentIndex - 1);
  } else {
    return false;
  }
}

console.log(balancePar(input, 0, 0));
