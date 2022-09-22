/*Given a string containing a single word or group of alphateic characters
with no spaces
  -return every possible substring that starts with the first char in the string
  */

function leadingSubStrings(str){
  let subStrArr = [];
  for(let i = 1; i <= str.length; i++){
    //grab the substring from index 0 to pos i-1
      subStrArr.push(str.slice(0,i));
  }
  console.log(subStrArr);
}
leadingSubStrings('abc');      // ["a", "ab", "abc"]
leadingSubStrings('a');        // ["a"]
leadingSubStrings('xyzzy');    // ["x", "xy", "xyz", "xyzz", "xyzzy"]
