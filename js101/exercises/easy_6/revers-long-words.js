/*Given a sentence contained in one string
check for words that have a length of 6 chars or more
reverse those words without moving there position in the sentence.
strings shall only contain letters and spaces
*/

function reverseThisWord(word){
  let reversed = "";
  for (let i = word.length-1; i >= 0; i--) {
    reversed += word[i];
  }
  return reversed;
}
function reverseWords(str){
  str = str.split(" ");
  str = str.map(curr => {
    if(curr.length < 5){
      return curr;
    }
    return reverseThisWord(curr);
  })
  console.log(str.join(" "));
}

reverseWords('Professional');             // "lanoisseforP"
reverseWords('Walk around the block');    // "Walk dnuora the kcolb"
reverseWords('Launch School');            // "hcnuaL loohcS"
reverseWords("")
