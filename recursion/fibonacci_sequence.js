// Iterative Approach

function fibonacci(value) {
  let n0 = 0;
  let n1 = 1;

  for (let i = 1; i <= value; i++) {
    temp = n0 + n1;

    n0 = n1;
    n1 = temp;
  }

  return n0;
}

// console.log(fibonacci(5));
// console.log(fibonacci(6));
// console.log(fibonacci(3));

// 0, 1, 1, 2, 3, 5, 8

function recursiveFibonacci(value) {
  if (value <= 1) {
    return value;
  }

  return recursiveFibonacci(value - 1) + recursiveFibonacci(value - 2);
}

console.log(recursiveFibonacci(6));
