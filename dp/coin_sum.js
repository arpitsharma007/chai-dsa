// sumPossible(8, [5,3,4]) -> true

function sumPossible(amount, numbers, memo = {}) {
  if (amount in memo) return memo[amount];

  if (amount === 0) return true;
  if (amount < 0) return false;

  for (const num of numbers) {
    if (sumPossible(amount - num, numbers, memo)) {
      memo[amount] = true;
      return true;
    }
  }

  memo[amount] = false;
  return false;
}

console.log(sumPossible(116, [5, 3, 4]));
console.log(sumPossible(15, [4, 6, 10]));
