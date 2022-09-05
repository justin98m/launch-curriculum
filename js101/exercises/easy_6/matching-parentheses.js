/*Given a string containing words , spaces and parentheses.
indicate whether all parenthes have a matching parentheses to close with.
*/
function isBalanced(str){
  let openBracketCount = 0;
  for(i=0;i<str.length;i++){
    if (str[i] === "(") {
      openBracketCount++;
    } else if(str[i] === ")" && openBracketCount < 1){
      return false;
    } else if (str[i] === ")"){
      openBracketCount--;
    }
  }
  return openBracketCount === 0;
}



console.log(isBalanced("What (is) this?") === true);
console.log(isBalanced("What is) this?") === false);
console.log(isBalanced("What (is this?") === false);
console.log(isBalanced("((What) (is this))?") === true);
console.log(isBalanced("((What)) (is this))?") === false);
console.log(isBalanced("Hey!") === true);
console.log(isBalanced(")Hey!(") === false);
console.log(isBalanced("What ((is))) up(") === false);
