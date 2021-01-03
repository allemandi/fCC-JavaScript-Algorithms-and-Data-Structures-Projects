# fCC JavaScript Algorithms and Data Structures Projects
Project Challenges for freeCodeCamp's JavaScript Algorithms and Data Structures Certification

## Palindrome Checker
Returns `true` if the given string is a palindrome. Otherwise, returns `false`.

> A palindrome is a word or sentence that's spelled the same way both forward and backward, ignoring punctuation, case, and spacing. --fCC challenge description

**Note:** All non-alphanumeric characters (punctuation, spaces and symbols) removed, lowercase applied.

## Roman Numeral Converter
Converts the given number into a Roman numeral.

## Caesars Cipher
Encodes string as ROT13 input and returns a decoded string.

> A common modern use is the ROT13 cipher, where the values of the letters are shifted by 13 places. Thus 'A' ↔ 'N', 'B' ↔ 'O' and so on. --fCC challenge description

**Note:** Only uppercase string input functions as required by this challenge. Non-alphabetic characters (i.e. spaces, punctuation) are not mutated in final string.

## Telephone Number Validator
Returns `true` if the passed string looks like a valid US phone number.

Examples of valid formats for US numbers:

```
555-555-5555
(555)555-5555
(555) 555-5555
555 555 5555
5555555555
1 555 555 5555
1(555)555-5555
```
Area code is required. If country code exists, this must be `1`.

## Cash Register
Cash register drawer function that accepts purchase price (price), payment (cash), and cash-in-drawer (cid) as three input arguments.

Returns `{status: "INSUFFICIENT_FUNDS", change: []}` if `cid` is less than change due, or if change cannot be returned.

Returns `{status: "CLOSED", change: [...]}` with `cid` for key change if  equal to change due.

Returns `{status: "OPEN", change: [...]}`, with currency value sorted in descending order as value of the change key.
