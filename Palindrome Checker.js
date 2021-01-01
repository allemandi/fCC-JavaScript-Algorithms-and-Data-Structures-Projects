// my solution to the Palindrome Checker challenge, uploaded against my fCC Profile

function palindrome(str) {
  let cleaned = str.replace(/[\W_]/g,"").toLowerCase();
  //[] character class, any class within the square brackets, which is anything other than alphabet or numbers, including underscores \W_. This also replaces whitespace
  let reverseClean = cleaned.split('').reverse().join("");
  //split cleaned into array, reverse array elements, join them again.

  return cleaned == reverseClean;
}

console.log(palindrome("not a palindrome"));
// return false
