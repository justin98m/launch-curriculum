/*
Write a program that will ask for user's name. The program will then greet the
user. If the user writes "name!" then the computer yells back to the user.

*/
const read = require("readline-sync");
function screamBack (name) {
  console.log(`HELLO ${name.toUpperCase()}, WHY ARE WE SCREAMING?`);
}

function greetUser (name) {
  console.log(`Hello ${name}`);
}
function getInput () {
  let name = read.question("What is your name? ");
  if (name.endsWith('!')) {
    screamBack(name);
  } else {
    greetUser(name);
  }
}

getInput();
