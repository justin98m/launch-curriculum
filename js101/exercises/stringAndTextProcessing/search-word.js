/*
Given a string and a  word
count the number of time the word appears in the string(case insensitive)
string words are seperated by one space
string includes special chars
*/

function countWord(word,text){
  //iterate through string
  //where each iteration checks 1 word seperated by a single space
  return text.split(" ").filter(subString =>{
    return subString.toLowerCase() === word.toLowerCase()
  }).length
}
/*Given a string and a word
highlt the word in the text by capitalizing it and surrounding with two *
**WORD** some text some text **WORD**
*/
function highlightWord(word,text){
  return text.split(" ").map(subString =>{
    return subString.toLowerCase() === word.toLowerCase() ?
       '**' + word.toUpperCase() + '**' :
       subString
  }).join(" ")
}



const text ='Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?';

console.log(countWord('qui', text));      // 3)
console.log(highlightWord('sed',text));
