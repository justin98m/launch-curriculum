/*
Write a function that takes one argument, a positive integer, and returns a
string of alternating '1's and '0's, always starting with a '1'. The length of
 the string should match the given integer.
 */

 function stringy (length) {
   let result = "";
   for (let idx = 1;idx <= length;idx++) {
     if (idx % 2 === 0) {
       result += 0;
     } else if (idx % 2 === 1) {
       result += 1;
     }
   }
   return result;
 }
console.log(stringy(4));
console.log(stringy(1));
console.log(stringy(10));
console.log(stringy(0).length);
