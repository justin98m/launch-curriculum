/*
Write a function that takes two strings as arguments, determines the length of
the two strings, and then returns the result of concatenating the shorter
string, the longer string, and the shorter string once again.
 You may assume that the strings are of different lengths.
 */
const read = require("readline-sync");

function controller() {
  let strings = getStrings();
  let shortString = retrieveShorterString(strings[0],strings[1]);
  if (shortString === strings[0]) {
    display(concatenateStrings(strings[0],strings[1]));
  } else {
    display(concatenateStrings(strings[1],strings[0]));
  }

}
function getStrings() {
  let string1 = read.question("Give me a string: ");
  let string2 = read.question("Give me another string: ");
  return [string1,string2];
}
//if the lenghts are equal the sencond string will default to being "Shorter"
function retrieveShorterString (string1,string2) {
  if (string1.length < string2.length) {
    return string1;
  } else {
    return string2;
  }
}
function concatenateStrings (shorter,longer) {
  return shorter + longer + shorter;
}
function display (stringer) {
  console.log(`Concatenated string : ${stringer}`);
}

controller();
