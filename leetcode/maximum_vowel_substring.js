var maxVowels = function (s, k) {
  let vowelCount = 0;
  let maxVowelCount = 0;
  let vowels = "aeiou";

  for (let i = 0; i < k; i++) {
    if (vowels.includes(s[i])) {
      vowelCount += 1;
    }
  }

  maxVowelCount = vowelCount;

  console.log(vowelCount);
  console.log(s);

  for (let i = k; i < s.count; i++) {
    console.log(s);
    if (vowels.includes(s[i - k])) {
      vowelCount = vowelCount - 1;
    }

    if (vowels.includes(s[i])) {
      vowelCount = vowelCount + 1;
    }

    if (maxVowelCount < vowelCount) {
      maxVowelCount = vowelCount;
    }

    console.log(vowelCount);
  }

  return maxVowelCount;
};

console.log(maxVowels("abciiidef", 3));
