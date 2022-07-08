/*
Write a function that determines and returns the UTF-16 string value of a string
 passed in as an argument. The UTF-16 string value is the sum of the UTF-16
 values of every character in the string. (You may use
   String.prototype.charCodeAt() to determine the UTF-16 value of a character.)
   */
const read = require("readline-sync");

function determineUTF16(){
  let input = read.question("Give me a string: ");
  let length = input.length;
  let utf16 = 0;
  for(let i = 0; i < length ; i++){
    utf16 +=  input.charCodeAt(i);
  }
  return utf16;
}

console.log("I will take in a string a compute the utf16 code for you ");
let utf16 = determineUTF16();
console.log(`Utf code: ${utf16}`);
