 //Using the following nested array, create a new array where all the values
 //are unnested
function nestBreaker(nestedArr) {
  let unnested = [];
  nestedArr.forEach((current) => {
    if(Array.isArray(current)){
      current.forEach((value) => unnested.push(value));
    } else {
      unnested.push(current);
    }
  });
  return unnested;

}
let nestedFlinstones = ["Fred", "Wilma", ["Barney", "Betty"], ["Bambam", "Pebbles"]];
console.log(`Nested Flinstones : ${nestedFlinstones}`);
console.log(`unnested Flinstones: ${nestBreaker(nestedFlinstones)}`);


//How do I know my solution is working if when I print to console it just
//prints out a comma seperated list 
