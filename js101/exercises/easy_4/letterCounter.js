/*
Write a function that takes a string consisting of zero or more space separated
words and returns an object that shows the number of words of different sizes.
Words consist of any sequence of non-space characters.*/


function wordSizes (sentence) {
  let countObj = {};
  sentence = sentence.split(" ");
  removeNonAlpha(sentence);

  sentence.forEach(element => {
    curLength = element.length;

    if(curLength === 0){
      return;
    } else if (countObj.hasOwnProperty(curLength)) {
      countObj[curLength] += 1;
    } else {
      countObj[curLength] = 1;
    }
  })
  return countObj;
}

console.log(wordSizes('Four score and seven.'));                       // { "3": 1, "4": 1, "5": 1, "6": 1 }
console.log(wordSizes('Hey diddle diddle, the cat and the fiddle!'));  // { "3": 5, "6": 1, "7": 2 }
console.log(wordSizes("What's up doc?"));                              // { "2": 1, "4": 1, "6": 1 }
console.log(wordSizes(''));                                            // {}
