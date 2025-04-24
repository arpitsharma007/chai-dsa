var reportSpam = function (message, bannedWords) {
  let banned = new Set([...bannedWords]);

  let spamCount = 0;

  console.log(banned);

  for (let i = 0; i < message.length; i++) {
    if (banned.has(message[i])) {
      spamCount += 1;
      if (spamCount >= 2) return true;
    }
  }

  return false;
};

console.log(reportSpam(["hello", "world", "leetcode"], ["world", "hello"]));
