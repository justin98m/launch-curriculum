/*
Given a string of words
where each word is seperated by a space
Create an array where each element is
  a word followed by a space and the number of chars in that word
*/

function wordLengths(sentence=""){
  if(sentence.length === 0)return [];
  //Iterate through string
  //deremine when word ends
  return sentence.split(" ").map(word =>{
    //count the chars in that word
    return word + " " + word.length;
  })
}
console.log(wordLengths('cow sheep chicken'));
console.log(wordLengths('one two three four five six seven'));
console.log(wordLengths('racecars drive fast'));
console.log(wordLengths(""));
console.log(wordLengths());
