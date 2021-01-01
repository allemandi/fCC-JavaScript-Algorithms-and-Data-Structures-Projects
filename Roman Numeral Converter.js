// my solution to the Roman Numeral Converter challenge, uploaded against my fCC Profile

function convertToRoman(num) {

  var indexArr = [
      [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1],
      ["M","CM","D","CD","C","XC","L","XL","X","IX","V","IV","I"]
      ];
  // indexArr[0] contains unique 13 values for num removal
  // indexArr[1] contains Unique 13 Roman numeral key

  var result = "";
  // result is the check value

  for (let i = 0; i < indexArr[0].length; i++)
  // iterate i through entire indexArr[0] length, which is 13. This matches indexArr[1].length, which is hardcoded in this instance
  {
      while (indexArr[0][i] <= num)
      {
          //while the numeral value index less than or equal to the inputted number
          result += indexArr[1][i];
          //add to the checkvalue of the roman numeral key
          num -= indexArr[0][i];
          // subtract the numeral value against the original number, then loop again.

      };

  };

 return result;
 // at the end of the nth (13th) iterative loop, return the result value
};

console.log(convertToRoman(909));
//returns CMIX
