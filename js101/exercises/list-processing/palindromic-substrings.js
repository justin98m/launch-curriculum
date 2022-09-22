/*
Given a string
  return all the substrings that are also palindrome
  return the substrings in order of apperance
  return dulplicates as they appear
  palindromes are case sensitive
  singles characters are not substrs
*/

function leadingSubStrings(str){
  let subStrArr = [];
  for(let i = 1; i <= str.length; i++){
      subStrArr.push(str.slice(0,i));
  }
  return subStrArr;
}
function allSubStrings(string){
  let subStrs = []
  for(let i =0;i<string.length;i++){
    subStrs = subStrs.concat(leadingSubStrings(string.slice(i)));
  }
  return subStrs;
}
//Get a list of all the substrings
function palindromes(string){
  let subStrings = allSubStrings(string);
  let palindromeStrings = subStrings.filter((curr) =>{
      if(curr.length < 2){
        return false;
      }
      return curr === curr.split("").reverse().join("");
  })
  return palindromeStrings;
}
console.log(palindromes('abcd'));       // []
console.log(palindromes('madam'));      // [ "madam", "ada" ]

console.log(palindromes('hello-madam-did-madam-goodbye'));
// returns
// [ "ll", "-madam-", "-madam-did-madam-", "madam", "madam-did-madam", "ada",
//   "adam-did-mada", "dam-did-mad", "am-did-ma", "m-did-m", "-did-", "did",
//   "-madam-", "madam", "ada", "oo" ]

console.log(palindromes('knitting cassettes'));
// returns
// [ "nittin", "itti", "tt", "ss", "settes", "ette", "tt" ]
