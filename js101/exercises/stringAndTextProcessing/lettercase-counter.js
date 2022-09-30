/*Write a function  where given a string of characters
  return an object indicating
    num of lower case chars
    num of upper case chars
    num of non alphabetical chars
    */

//each helper function filters for its indicated purpose and returns
//the length of the filter array result
function lowercaseCount(string){
  return string.split("").filter( char => char.match(/[a-z]/)).length;
}
function uppercaseCount(string){
  return string.split("").filter(char => char.match(/[A-Z]/)).length;
}
function nonAlphabeticalCount(string,lowerCount,upperCount){
  return string.split("").filter(char => char.match(/[^a-zA-Z]/)).length;
}
function letterCaseCount(string){
  let countObj = {
    lowercase : 0,
    uppercase: 0,
    neither: 0,
  }
  if(string.length === 0){
    return countObj;
  }
  countObj.lowercase = lowercaseCount(string);
  countObj.uppercase = uppercaseCount(string);
  countObj.neither = nonAlphabeticalCount(string);

  return countObj;
}
console.log(letterCaseCount('abCdef 123'));  // { lowercase: 5, uppercase: 1, neither: 4 }
console.log(letterCaseCount('AbCd +Ef'));    // { lowercase: 3, uppercase: 3, neither: 2 }
console.log(letterCaseCount('123'));         // { lowercase: 0, uppercase: 0, neither: 3 }
console.log(letterCaseCount(''));            // { lowercase: 0, uppercase: 0, neither: 0 }
