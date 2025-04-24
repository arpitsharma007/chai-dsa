var increasingTriplet = function (nums) {
  let smallest = Infinity;
  let secondSmallest = Infinity;

  for (num of nums) {
    if (num <= smallest) {
      smallest = num;
    } else if (num <= secondSmallest) {
      secondSmallest = num;
    } else {
      console.log(num);
      return true;
    }
  }

  return false;
};

console.log(increasingTriplet([15, 14, 12]));
