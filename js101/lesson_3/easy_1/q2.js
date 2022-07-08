//determine whether a given string ends with an exclamation mark (!)?
let str1 = "Come over here!"; // true
let str2 = "What's up, Doc?"; // false

function endsWithExclamtion(str){
  return str[str.length-1] === '!'
}
console.log(endsWithExclamtion(str1));
console.log(endsWithExclamtion(str2));
