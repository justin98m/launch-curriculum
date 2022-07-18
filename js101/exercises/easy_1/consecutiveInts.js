const read = require("readline-sync")
//PROBLEM
//Ask the user for a int greater than zero
//Ask if they want to calculate the sum or product
//of 1 - the value entered inclusive

function getNum() {
  return Number(read.question('Enter a number greater than 0: '));
}
function getOperation() {
  //true for muliplication
  //false for addition
  let operation =  read.question('Would you like the product(1) or the Sum(2): ');
  if (operation === 1) {
    return true;
  } else {
    return false;
  }
}
function CalculateSum (num) {
  let sum = 0;
  for (let i = 1; i <= num; i++) {
    sum += i;
  }
  return sum;
}
function CalculateProduct (num) {
  let product = 0;
  for (let i = 1; i <= num; i++) {
    product += i;
  }
  return product;
}

let num = getNum();
let result;
if (getOperation()) {
  result = CalculateProduct(num);
} else {
  result = CalculateSum(num);
}
console.log(`Your result is ${result}`);
