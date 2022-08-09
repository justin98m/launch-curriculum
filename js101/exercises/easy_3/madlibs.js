let read = require('readline-sync');
function story(sentenceObj){
  let sentenece = `Have you ${sentenceObj.verb} their ${sentenceObj.adj}` +
  `${sentenceObj.noun} ${sentenceObj.adverb}`;
  return sentenece;
}
function getInput(){
  let sentenceObj = {}
  sentenceObj.noun = read.question("Give me a noun: ");
  sentenceObj.verb = read.question("Give me a verb: ");
  sentenceObj.adj = read.question("Give me an adjective: ");
  sentenceObj.adverb = read.question("Give me a adverb: ")
  return sentenceObj;
}

let sentenceObj = getInput();
console.log(story(sentenceObj));
