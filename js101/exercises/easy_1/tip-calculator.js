const read = require("readline-sync");
const PERCENTAGE_CONVERSION_RATE = .01;
//prompt user for the bill and the percentage they would like to tip
function retrieveBill () {
  return Number(read.question("Enter the cost of your Bill: "));
}
function retrieveTipPercentage () {
  return PERCENTAGE_CONVERSION_RATE *
  Number(read.question("Enter your desired tip percentage(%): "));
}
function calculateTip (tipPercentage,bill) {
  return bill * tipPercentage
}
//Display the tip and the total amount including the tip
function displayInfo () {
  console.log(`You should tip ${tip.toFixed(2)}`);
  console.log(`Putting your grand total to $${(tip + bill).toFixed(2)}`);
}
let bill = retrieveBill();
let tipPercentage = retrieveTipPercentage();
let tip = calculateTip(tipPercentage,bill);
displayInfo();
