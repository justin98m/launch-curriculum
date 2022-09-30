/*write a function where
  given an array of strings
  remove all vowels from each string
  return the voweless array
  */

const vowels = ['A','a','E','e','I','i','O','o','U','u'];

function removeVowels(arrOfStrings){

  return arrOfStrings.map((string) => {
    stringArr = string.split("");
    for(let i =0; i<stringArr.length; i++){
      if(vowels.includes(stringArr[i])){
        stringArr.splice(i,1);
        //splice changes the length and i-- prevents skipping elements
        i--;
      }
    }
    return stringArr.join("");
  })
}

console.log(removeVowels(['abcdefghijklmnopqrstuvwxyz']).includes("bcdfghjklmnpqrstvwxyz"));
console.log(removeVowels(['green', 'YELLOW', 'black', 'white']));  // ["grn", "YLLW", "blck", "wht"]
console.log(removeVowels(['ABC', 'AEIOU', 'XYZ']));                // ["BC", "", "XYZ"]
