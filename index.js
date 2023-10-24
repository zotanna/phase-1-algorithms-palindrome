function isPalindrome(word) {
  word = word.replace(/[^a-zA-Z]/g, '').toLowerCase();

  return word === word.split('').reverse().join('');
}

/* 
  Add your pseudocode here
*/

/*
  Takes  a single string argument, word, and checks whether
   it's a palindrome while ignoring non-alphabet characters and considering only lowercase letters.
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
