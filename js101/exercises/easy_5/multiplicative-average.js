/* Write a function that
  *Takes in a non Empty array of integers
  *Uses all elements as multilples to create a product
  *Uses the len of the array as a divisor for that procudt
  *converts quotient to a string rounded to the third decimal place
*/

function roundToThree(decimals){
  //add 0's if substring is less than 3 digits
  if(decimals.length < 3){
    decimals = decimals.padEnd(3,'0');
  } else if(decimals.length > 3){
    //reduce substring to 4 decimal spots and convert to array to mutate
    decimals = decimals.slice(0,4).split("");
    //manually round based on the last digit
    if(Number(decimals[3]) >= 5){
      decimals[2] = Number(decimals[2]);
      decimals[2]++;
    }
    //remove 4th decimal place and convert decimal back to string
    decimals.pop();
    decimals = decimals.join("");
  }
  return decimals;
}

function multiplicativeAverage(arr){
  let divisor = arr.length;
  let product = arr.reduce((prevProduct, current) =>{
    return prevProduct *= current;
  })
  let quotient = String(product / divisor);

  //create substring before and after decimal point
  quotient = quotient.split(".");
  wholeNums = quotient[0];
  decimals = quotient[1];

  decimals = roundToThree(decimals);
  quotient = wholeNums + '.' + decimals;
  return quotient;
}
console.log(typeof multiplicativeAverage([3, 5]));                   // "7.500"
console.log(multiplicativeAverage([2, 5, 7, 11, 13, 17]));    // "28361.667"
