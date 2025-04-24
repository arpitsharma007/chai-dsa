var findDifference = function (nums1, nums2) {
  let arraySet1 = new Set([...nums1]);
  let arraySet2 = new Set([...nums2]);

  let diffnums1 = [];
  let diffnums2 = [];

  for (let i = 0; i < nums1.length; i++) {
    // let value = arraySet2.has(nums1[i])
    // let num = nums1[i]
    // if(!value) {
    //     diffnums1.push(num)
    // }
    if (!arraySet2.has(nums1[i])) {
      diffnums1.push(nums1[i]);
    }
  }

  for (let i = 0; i < nums2.length; i++) {
    if (!arraySet1.has(nums2[i])) {
      diffnums2.push(nums2[i]);
    }
  }

  // // let abc = [...diffnums1, ...diffnums2]

  return [...diffnums1, ...diffnums2];
};

console.log(findDifference([1, 2, 3], [2, 4, 6]));
