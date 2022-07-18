/*
Write a function that converts a non-negative integer value (e.g., 0, 1, 2, 3,
  and so on) to the string representation of that integer. */
const digits = ['0','1','2','3','4','5','6','7','8','9']
function numToString(num){
  let result = "";
  let remainder;
do {
    remainder = num % 10;
    num = Math.floor(num/10);
    result =  digits[remainder] + result;
} while(num > 0);
  return result;
}
function signedIntToString(num){
  isNegative = num < 0 ;
  if(isNegative){
    //negative nums will break numToStrings logic
    return "-" + numToString(-1 * num);
  }
  return "+" + numToString(num);
}

console.log(signedIntToString(12) === "+12");
console.log(signedIntToString(18) === "+18");
console.log(signedIntToString(-122333) === "-122333");
