//given a string
//alternate uppecasing and lowercaing every character
//not alphabeticatl characters shouldnt be change but should continue
//the sequence order as if they were alphabetical characters
//Start the sequence with an uppercase value

function isAlphabetical(char){
  char = char.toLowerCase();
  return char >= 'a' && char <= 'z'
}

//take in string
function staggeredCase(string){
  //create bool value upperCase
  let upperCase = true;
  //iterate through the string
  return string.split("").map(char => {
    if(isAlphabetical(char)){
      if(upperCase){
        upperCase = false;
        return char.toUpperCase();
      } else {
        upperCase = true;
        return char.toLowerCase();
      }
    } else {
        return char
      }
  }).join("");
}

console.log(staggeredCase('I Love Launch School!'));        // "I LoVe lAuNcH ScHoOl!"
console.log(staggeredCase('ALL_CAPS'));                     // "AlL_CaPs"
console.log(staggeredCase('ignore 77 the 4444 numbers'));   // "IgNoRe 77 ThE 4444 nUmBeRs"
