/*
Write a function that computes the sum of all numbers between 1 and some other
number, inclusive, that are multiples of 3 or 5.
*/

const read = require("readline-sync");
console.log("I will compute a sum of numbers between 1 and x");
console.log("Where x is a number you give me");
console.log("I will only add multiples of 3 and 5 ");
function sumComputer() {
  let endRange = read.question("Enter end bound do you desire: ");
  let sum = 0;
  for (let i = 0; i <= endRange; i++) {
    if (i % 3 === 0 || i % 5 === 0) {
      sum += i;
    }
  }
  console.log(`The sum : ${sum}`);
}
sumComputer();
