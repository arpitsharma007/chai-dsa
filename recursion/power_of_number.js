// Power of a given number

function powOfNumber(base, exponent) {
  if (exponent === 0) {
    return 1;
  }

  return powOfNumber(base, exponent - 1) * base;
}

console.log(powOfNumber(2, 3));
