/*
Starting with the string:

let munstersDescription = "The Munsters are creepy and spooky.";

Return a new string that swaps the case of all of the letters:

`tHE mUNSTERS ARE CREEPY AND SPOOKY.`

Would like to figure out how to solve this with map as I was having issues
with the array ending up as a bunch of commas and then converted to a empty Sting
*/

function oppositeCase (sentence) {
  sentence = sentence.split("");
  console.log(sentence);
  for(i = 0; i< sentence.length;i++){
    if(sentence[i] === sentence[i].toLowerCase()){
      sentence[i] = sentence[i].toUpperCase();
    } else {
      sentence[i] = sentence[i].toLowerCase();
    }
  }

  return sentence.join("");
}

let munstersDescription = "The Munsters are creepy and spooky.";
console.log(`Here;s a regular sentence: ${munstersDescription}`);
console.log(`Here the sentence in opposite cases: \n${oppositeCase(munstersDescription)}`);
