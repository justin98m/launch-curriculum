/*Write a function that takes a string argument and returns a new string that
contains the value of the original string with all consecutive
duplicate characters collapsed into a single character. */

function crunch(string){
  let stringCopy = string.split("");
  let count = 0;
  for(i = 0; i < stringCopy.length;i++){
    if(stringCopy[i] === stringCopy[i+1]){
      //count how many instances of a char exist
      while(stringCopy[i] === stringCopy[i+count]){
        count++;
      }
      //delete every instance but the found one
      stringCopy.splice(i+1,count-1);
      count = 0;
    }
  }
  return stringCopy.join("");
}
console.log(crunch('ddaaiillyy ddoouubbllee'));    // "daily double"
console.log(crunch('4444abcabccba'));              // "4abcabcba"
console.log(crunch('ggggggggggggggg'));            // "g"
console.log(crunch('a'));                          // "a"
console.log(crunch(''));                           // ""
