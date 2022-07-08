/*In the modern era under the Gregorian Calendar, leap years occur in every year
that is evenly divisible by 4, unless the year is also divisible by 100.
If the year is evenly divisible by 100, then it is not a leap year, unless the
year is also evenly divisible by 400.

Assume this rule is valid for any year greater than year 0. Write a function
that takes any year greater than 0 as input and returns true if the year is a
leap year, or false if it is not a leap year.

The British Empire adopted the Gregorian Calendar in 1752, which was a leap year.
Prior to 1752, they used the Julian Calendar. Under the Julian Calendar,
leap years occur in any year that is evenly divisible by 4.

Using this information, update the function from the previous exercise to
 determine leap years both before and after 1752.
*/

console.log('I can help determine if any year is a leap year');
const read = require('readline-sync');

function getYear () {
  return Number(read.question('Give me a year: '));
}
function validateLeapYear(year){
  if (year < 1752) {
    if(year % 4 !== 0){
      return false;
    }
    return true;
  } else {
    if (year % 4 !== 0) {
      return false;
    } else if ((year % 100 === 0)  && (year % 400 !== 0)) {
      return false;
    } else {
      return true;
    }
  }
}
function displayResults () {
  let year = getYear();
  if (validateLeapYear(year)) {
    console.log(`${year} is a leap year!`);
  } else {
    console.log(`${year} is not a leap year`);
  }
}

displayResults();
