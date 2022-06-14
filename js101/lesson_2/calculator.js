const readline = require('readline-sync');
//Ask User for two nums
console.log(`Welcome to Calculator`);

let num1 = parseInt(readline.question(`What is your first number? \n`));
let num2 = parseInt(readline.question(`What is your second number \n`));
console.log(num1,num2);
//Ask user to add subtreact multiply or divide the two numbers

let operation = readline.question(`What operation would you like to preform? \n
  1)Addition 2)Subtration 3)Muliplication 4)Division \n`);
let result;
 switch(operation) {
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
   }
console.log(`The result is  ${result}`);
