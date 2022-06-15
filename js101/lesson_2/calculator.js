const readline = require('readline-sync');
const message = require('./calculator-messages.json');
console.log(message);
function prompt(message) {
  console.log(`=> ${message}`);
}

function invalidNumber(number) {
  return number.trimStart() === '' || Number.isNaN(Number(number));
}

prompt(message.welcome);
function newCalculation() {
  prompt(message.getVal1);
  let number1 = readline.question();

  while (invalidNumber(number1)) {
    prompt(message.invalidNum);
    number1 = readline.question();
  }

  prompt(message.getVal2);
  let number2 = readline.question();

  while (invalidNumber(number2)) {
    prompt(message.invalidNum);
    number2 = readline.question();
  }

  prompt(message.getOperation);
  prompt(message.operationKey);
  let operation = readline.question();

  while (!['1', '2', '3', '4'].includes(operation)) {
    prompt(message.invalidOperation);
    operation = readline.question();
  }

  let output;
  switch (operation) {
    case '1':
      output = Number(number1) + Number(number2);
      break;
    case '2':
      output = Number(number1) - Number(number2);
      break;
    case '3':
      output = Number(number1) * Number(number2);
      break;
    case '4':
      output = Number(number1) / Number(number2);
      break;
  }

  prompt(`${message.result} ${output}`);
}
newCalculation();
let keepGoing = true;
let response = "";
while (keepGoing) {
  prompt(message.restart);
  response = readline.question();
  response = response.toLowerCase();
  if (response === 'y') {
    newCalculation();
  } else if (response === 'n') {
    keepGoing = false;
  }
}
