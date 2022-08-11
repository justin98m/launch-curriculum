/*Write a program that solicits six numbers from the user and logs a message
that describes whether the sixth number appears among the first five numbers. */

let read = require("readline-sync");
let index = []
for(let i=1;i<= 5;i++){
  index.push(read.question(`Enter Number ${i}: `));
}
let last = read.question("Enter the last number : ");

if(index.includes(last)){
  console.log(`Number ${last} is included in ${index}`);
} else {
  console.log(`Number ${last} does not appear in ${index}`);
}
