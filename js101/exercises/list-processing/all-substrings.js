/* Given a string
return a list of all possible substrings
sort this list in order the substring appears in the string
ex a string starting with a should have all the substrings starting with a first
sort the strings with the same prefix by there length from smallest to longest
*/

function leadingSubStrings(str){
  let subStrArr = [];
  for(let i = 1; i <= str.length; i++){
    //grab the substring from index 0 to pos i-1
      subStrArr.push(str.slice(0,i));
  }
  return subStrArr;
}
//Getting all the substrings
  //Take in string
function allSubStrings(str){
  let subStrs = []
  for(let i =0;i<str.length;i++){
    //Create a substring starting with the i pos to Length-1
    //Then generate all substrings of said substr
    subStrs = subStrs.concat(leadingSubStrings(str.slice(i)));
  }
  return subStrs;
}

console.log(allSubStrings("heyThere"));
/* returns
  [
    h,he,hey,heyT,heyTh,heyThe,heyTher,heyThere,
    e,ey,eyT,eyTh,eyThe,eyTher,eyThere,
    y,yT,yTh,yThe,yTher,yThere,
    T,Th,The,Ther,There,
    h,he,her,here,
    e,er,ere,
    r,re,
    e
  ]
  */
console.log(allSubStrings('abcde'));

/* returns
[ "a", "ab", "abc", "abcd", "abcde",
  "b", "bc", "bcd", "bcde",
  "c", "cd", "cde",
  "d", "de",
  "e" ]
*/
