//Log all even nums from 1 to 99 inclusive
//seperate each num on its own line
//provide way for use to specify limits of range of nums
const readline = require("readline-sync");
const MAXIMUM_VALUE = 1000;
const MINIMUM_VALUE = -1000;
let min,max;
console.log(`I will print out all the even numbers from the range you give me`);

while (true) {
  console.log(`Enter your min value: `);
  min = Number(readline.question());
  console.log(`Enter your max value: `);
  max = Number(readline.question());
  if (min >= max){
    console.log(`Your Min value must be less than your max value` );
  } else if (min < MINIMUM_VALUE){
    console.log(`Your min value cannot be less than ${MINIMUM_VALUE}`);
  } else if (max > MAXIMUM_VALUE){
    console.log(`Your max value cannot be more than ${MAXIMUM_VALUE}`);
  } else{
    break;
  }
}

//min should truly equal the smallest odd val within the range
if (Math.abs(min) % 2 === 1) min++;

for (i = min; i <= max;i += 2){
  console.log(`\n${i}`);
}
