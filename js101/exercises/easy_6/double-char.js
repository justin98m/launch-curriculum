/* Write a function that takes a string
and returns another string
where each char from the input string is repeated once in order as recieved
*/

function repeater(str){
  let doublestr = str.split("");
  doublestr = doublestr.map(cur => cur + cur);
  return doublestr.join("");
}
console.log(repeater("hello"));
console.log(repeater("abcdefg"));
console.log(repeater('12abcbooh'));
