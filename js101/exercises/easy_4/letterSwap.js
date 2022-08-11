//Given a string of words separated by spaces, write a function that swaps the
//first and last letters of every word.

function swap(sentence){
  sentence = sentence.split(" ");
  sentence = sentence.map( word => {
    let len = word.length;
    if(len === 1)return word;

    word = word.split("");
    let temp = word[0];
    word[0] = word[len-1];
    word[len-1] = temp;

    return word.join("");
  })
  console.log(sentence.join(" "));
}

swap('Oh what a wonderful day it is');  // "hO thaw a londerfuw yad ti si"
swap('Abcde');                          // "ebcdA"
swap('a');                              // "a"
