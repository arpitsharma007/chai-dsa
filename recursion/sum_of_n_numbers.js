// Sum of numbers till N

function sumOfN(number) {
  if (number == 1) {
    return 1;
  }

  return sumOfN(number - 1) + number;
}

console.log(sumOfN(2));
console.log(sumOfN(3));
console.log(sumOfN(4));
console.log(sumOfN(5));
