/* Given a string that is in the form of a sentence
capitalize the first charater of each word
lowercase any character that is not the first
*/

function wordCap(sentence){
  sentenceArr = sentence.split(" ");
  sentence = sentenceArr.map(word => {
    //replace first char with uppercased version and remaining string with lowercased
    return word = word.slice(0,1).toUpperCase() + word.slice(1).toLowerCase();
  })
  return sentence.join(" ");
}
console.log(wordCap('four score and seven'));       // "Four Score And Seven")
console.log(wordCap('the javaScript language'));    // "The Javascript Language"
console.log(wordCap('this is a "quoted" word'));    // 'This Is A "quoted" Word'
console.log(wordCap('trYING tOOO BReak $Code hE^#R!'));
