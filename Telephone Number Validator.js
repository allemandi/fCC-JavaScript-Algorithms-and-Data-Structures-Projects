// my solution to the Telephone Number Validator challenge, uploaded against my fCC Profile

function telephoneCheck(str) {

  var tempArr = [];
  // empty array

  var isCorrect = (x) => /[0-9-() ]/.test(x);
  // checkfunction per character, against numbers 0 to 9, dash, parentheses, and space

  var isNum = (x) => /[0-9]/.test(x);
  // check function per character for digits only

  var parenTest = (x) => /[()]/.test(x);
  // check function for character for parentheses

  var parenReg = (x) => /\(\d{3}\)/.test(x);
  // in any given string, \( begins with an (, \d{3} leads with 3 digits, and \) ends with a closing )
  // e.g. (555) matches regex, (55) or 555) fails

  var parenCount = 0;
  // checkValue


  if (str[0] == 1)
    // if str[0] is 1, then likely to be area code based on US convention
    {
      str = str.slice(1, str.length);
      // slice and reassign original str to remove the area code from array
    };


  for(var j = 0; j < str.length; j++)
  // loop according to length of given str
  {
    if (!isCorrect(str[j]))
    {
      return false;
      // if any part of given str does not match the allowed pattern of characters of isCorrect, preemptively end iteration and return false
    }
    if (parenTest(str[j]))
    {
      parenCount++;
      // if any given str element is a parantheses, add to parenCount checkValue
    }
    if (isNum(str[j]))
    {
      tempArr.push(str[j]);
      // if any given str element is a number, then push to tempArr
    }
  }

  if(parenCount != 0 && !parenReg(str))
  {
    return false;
    // if the parenCount is greater than 0, then parenReg must be passed.
    // Otherwise, return false
  }
  if (tempArr.length == 10)
  {
    return true;
    // if given tempArr length is 10 (conventional number of digits in a phone number), then return true
  }

  return false;
  // otherwise, return false
}

console.log(telephoneCheck("1(555)555-5555"));
// return true
