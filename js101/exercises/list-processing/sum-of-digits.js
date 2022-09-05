/* Given a positive integer , add all the digits composing the integer and
return the sum. Create the program without using for, while or do .. while.
*/

function sum(num){
  num = String(num).split("");
  return num.reduce((sum,curr) =>{
    return Number(curr) + sum;
  },0)//must initialize reducer or convert index 0 to a number immeadiatly
}
console.log(sum(123));
console.log(sum(2));
console.log(sum(0));
console.log(sum(4023));
console.log(sum(1000));
console.log(sum(222))
