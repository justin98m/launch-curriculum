/* Write a program that will
  Take in a users current age
  Their planned retirement age
  using the current year determine what year they'll retire */
  const read = require("readline-sync");
  const currentYear = new Date().getFullYear();;

  let currentAge = Number(read.question("What is your current Age ? "));
  let retirementAge = Number(read.question("What Year do you want to retire? "));

  let retirementYear = currentYear - currentAge + retirementAge;

  console.log(`It's ${currentYear}. You will retire in ${retirementYear}`);
