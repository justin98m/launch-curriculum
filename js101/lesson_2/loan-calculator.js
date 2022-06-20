let read = require('readline-sync');
const MONTHS_IN_A_YEAR = 12;
const PERCENTAGE_TO_DECIMAL = .01
function prompt(message) {
  console.log(`=> ${message}`);
}
//determine if given element is a number
function invalidNum(num) {
  num = Number(num);
  if (Number.isNaN(num) || num < 0) {
    return false;
  }

  return true;
}
//loop a a given prompt until a user enters valid input
function inputValidator(message,num) {
  while (!invalidNum(num)) {
    prompt(message);
    num = Number(read.question());
  }
  return num;
}
function choosePercision (monthlyPayment) {
    switch (true) {
      /*for simplicity for myself and a unlikley inconvenience for  the user,
       a 10¢ or less monthly payment will be displayed at just 10¢ */
      case monthlyPayment <= .1 :
        return "0.10"
      case monthlyPayment < 1 && monthlyPayment > .1:
        return monthlyPayment.toPrecision(2)
      case  monthlyPayment < 10 && monthlyPayment > 0:
        return monthlyPayment.toPrecision(3);
      case monthlyPayment >= 10 && monthlyPayment < 100:
        return monthlyPayment.toPrecision(4);
      case monthlyPayment >= 100 && monthlyPayment < 1000:
        return monthlyPayment.toPrecision(5);
    }
}



prompt("Welcome to your loan calculator!");

//Retrieving Loan information from user
prompt("How much do you owe on your loan? ");
let loanAmount = read.question('$');
loanAmount = inputValidator("Invalid Dollar amount, please enter a valid number: "
  ,loanAmount);
loanAmount = Math.floor(loanAmount);

prompt("Enter the length of your loan in years then months(Decimals will be rounded down)");
prompt("Ex:a 16 month loan is 1 year and 4 months");
prompt("Years : ");
let loanYears = read.question();
loanYears = inputValidator("Invalid year value entered, please enter a valid number: "
  ,loanYears);
loanYears = Math.floor(loanYears);

prompt("Months: ");
let loanMonths = read.question();
loanMonths = inputValidator("Invalid month value entered, please enter a valid number: "
  ,loanMonths);
loanMonths = Math.floor(loanMonths);


prompt('Enter your loans APR as a percentage (12.62% as 12.62)');
prompt("APR :");
let APR = read.question();
APR = inputValidator("Invalid APR value entered,please try again :",APR);

//Convert loan length into month format only
loanMonths = (loanYears * MONTHS_IN_A_YEAR) + loanMonths;

let monthlyInterest = (APR * PERCENTAGE_TO_DECIMAL) / MONTHS_IN_A_YEAR;
let monthlyPayment = loanAmount * (monthlyInterest /
  ( 1 - Math.pow(1 + monthlyInterest,-loanMonths)));
monthlyPayment = choosePercision(monthlyPayment);

prompt(`Your loan requires you to pay $${monthlyPayment} for ${loanMonths} months`);
prompt(`\n\n======= ${loanAmount}  | ${loanMonths} | ${APR} | ${loanYears} =====`);
