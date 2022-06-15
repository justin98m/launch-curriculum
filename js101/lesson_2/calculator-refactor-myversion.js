const readline = require('readline-sync');
function prompt(message) {
  console.log(`=> ${message}`);
}
function operate(operation,num1,num2) {
  let result;
  switch (operation) {
    case '1':
      result = num1 + num2;
      break;
    case '2':
      result = num1 - num2;
      break;
    case '3':
      result = num1 * num2;
      break;
    case '4':
      result = num1 / num2;
      break;
    default:
      return false;
  }
  return result;
}
function invalidNumber(num) {
  //a coercered value will become NaN if it wasnt a string version of a number
  return  Number.isNaN(Number(num));
}
prompt(`Welcome to Calculator`);
//Ask User for two nums and validate each input num
prompt(`What is your first Number? `);
let num1 = parseInt(readline.question(),10);
while (invalidNumber(num1)) {
  prompt(`You entered a invalid value, please try again `);
  num1 = parseInt(readline.question(),10);
}

prompt(`What is your second Number? `);
let num2 = parseInt(readline.question(),10);
while (invalidNumber(num2)) {
  prompt(`You entered a invalid value, please try again `);
  num2 = parseInt(readline.question(),10);
}

//Ask user to add subtreact multiply or divide the two numbers
prompt(`What operation would you like to preform?`);
prompt(`1)Addition 2)Subtration 3)Muliplication 4)Division`);
let operation = readline.question();
let  validOperation = operate(operation);
while (!validOperation) {
  prompt(`You entered an invalid key for a operation, try again`);
  prompt(`1)Addition 2)Subtration 3)Muliplication 4)Division`);
  operation = readline.question();
  validOperation = operate(operation,num1,num2);
}
let result =  validOperation;

prompt(`The result is  ${result}`);
