/*
Write a program that prompts the user for two positive integers, and then prints
 the results of the following operations on those two numbers: addition,
 subtraction, product, quotient, remainder, and power. Do not worry about
 validating the input.
 */

const read = require("readline-sync");
function add (num1,num2) {console.log(`${num1} + ${num2} = ${num1 +  num2}`);}
function subtract (num1,num2) {console.log(`${num1} - ${num2} = ${num1 - num2}`);}
function mult (num1,num2) {console.log(`${num1} * ${num2} = ${num1 * num2}`)}
function divide (num1,num2) {console.log(`${num1} / ${num2} = ${num1 / num2}`);}
function modulo (num1,num2) {console.log(`${num1} % ${num2} = ${num1 % num2}`);}
function power (num1,num2) {console.log(`${num1} ** ${num2} = ${num1 ** num2}`);}

function getInput () {
 let num1 = Number(read.question('What is the first number? '));
 let num2 = Number(read.question('What is the second number? '));
 controller(num1,num2);
}
function controller (num1,num2) {
 add(num1,num2);
 subtract(num1,num2);
 mult(num1,num2);
 divide(num1,num2);
 modulo(num1,num2);
 power(num1,num2);
 }
 console.log('If you give me two numbers I will preform several operations');
 getInput();
