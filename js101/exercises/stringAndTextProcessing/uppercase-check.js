/*Write a function that takes in a string
return if all the alphanumeric characters are alphabetic
can be given whitespace, numbers and special characters

*/

function isUppercase(string ){
  //remove all non alpha  characters from string
  //returns an array of arrays where the 0th element is each alpha char in the string
  let alphaChars = [...string.matchAll(/[a-zA-Z]/g)];
  //indicate if onecharacter isnt uppercase
  return alphaChars.every(elm => elm[0] === elm[0].toUpperCase());
}

console.log(isUppercase('t'));               // false
console.log(isUppercase('T'));               // true
console.log(isUppercase('Four Score'));      // false
console.log(isUppercase('FOUR SCORE'));      // true
console.log(isUppercase('4SCORE!'));         // true
console.log(isUppercase(''))  // true
