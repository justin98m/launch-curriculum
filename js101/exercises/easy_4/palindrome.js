function extractAlphaNum(statement){
  let alphaNum = new RegExp('[a-zA-z0-9]');
  let extracted = statement.split("").filter(curr=>{
    if(alphaNum.test(curr)){
      return true;
    }
    return false;
  })
  return extracted;
}
function isPalindrome(statement){
  statement = extractAlphaNum(statement);
  statement = statement.join("").toUpperCase();
  let reverseCopy = statement.split("").reverse();
  reverseCopy = reverseCopy.join("")
  //console.log(statement,reverseCopy);
  return reverseCopy === statement;
}
function isPalindromev2(statement){
  let reversed = statement.split("");

  for(let i = 0;i<statement.length;i++){
    reversed[i] = statement[statement.length-(i+1)]
  }
  return statement === reversed.join("");
}
console.log(isPalindrome('madam'));               // true
console.log(isPalindrome('Madam'));               // false (case matters)
console.log(isPalindrome("madam i'm adam"));      // false (all characters matter)
console.log(isPalindrome('356653'));              // true
console.log(isPalindrome('356a653'));//true
console.log(isPalindrome('123ab321')); //false
