/*
Write a function that takes a string of digits and returns the appropriate
number as an integer. Do not use ParseInt or Number()
*/

function stringToNum(numString){
  return numString * 1;
}

console.log(stringToNum("-12") === -12);//number
console.log(stringToNum("+1") === 1);//number
console.log(stringToNum("-486") === -486);//number
console.log(stringToNum("+512") === 512);//number
