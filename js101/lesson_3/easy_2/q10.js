/* Write a one-line expression to count the number of lower-case t characters
in each of the following strings:
*/
let statement1 = "The Flintstones Rock!";
let statement2 = "Easy come, easy go.";

function tCounter(str){
  let count = 0;
  for(let i = 0; i< str.length;i++){
    if(str[i] === 't'){
      count++;
    }
  }
  return count;
}
console.log(`There are ${tCounter(statement1)} t's in the statement: ${statement1}`);
console.log(`There are ${tCounter(statement2)} t's in the statemen: ${statement2}`);
