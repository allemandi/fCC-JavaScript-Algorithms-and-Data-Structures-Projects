// my solution to the Caesars Cipher challenge, uploaded against my fCC Profile


function rot13(str) {
  var newArr = [];
  var k = 13;
  var converted = "";

  for (let i = 0; i < str.length; i++)
  {

    // if the character is an uppercase alphabet
    if (str[i].charCodeAt() > 64 && str[i].charCodeAt() < 91)
    {
      // if the ASCII code is between 65 and 90), which is UpperCase A and Z in this case
      converted = ((str[i].charCodeAt() - 65 + k) % 26) + 65;
      // character code subtracted by 65 to reset to A, plus 13 (cipher key)
      // return a  remainder after 26 as alphabetical division
      // add 65 to return the character code back to ASCII A-Z bracket
      // convert the character code back to string
      newArr.push(String.fromCharCode(converted));
      //push out to array the reverted char code
    }

    else
    {
      newArr.push(str[i]);
      // otherwise, non-uppercase characters will be pushed
    }

  }

  var result = newArr.join("");
  // rejoin the array

  return result;
}

console.log(rot13("SERR PBQR PNZC"));

// returns FREE CODE CAMP
