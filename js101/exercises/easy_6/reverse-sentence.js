/* Given a string of word(s) or an empty string.
reverse the order of the words Given
*/


function reverse(str){
  //easy way
  //return str.split(" ").reverse().join(" ");

  //"by hand"
  if(str.length === 0){
    return str;
  }
  let subStrs = [];
  let wordCount = 1;
  for(let i = 0; i < str.length; i++){
    if(str[i] === " "){
      wordCount++;
    }
  }
  //Start adding the substring array at the last pos to reverse the order
  let subStrPos = wordCount - 1;
  for(let i = 0;i < str.length; i++) {
    //if the current pos is undefined intitalize to a empty string
    if(!subStrs[subStrPos]){
      subStrs[subStrPos] = ""
    }
    //when a space is hit start the next substring
    if(str[i] === " "){
      subStrPos--;
      continue;
    }
    subStrs[subStrPos] += str[i];
  }
  
  let reverseStr = "";
  for(let i=0;i<subStrs.length;i++){
    reverseStr += subStrs[i];
    //avoids adding space at the end of the string
    if(i < subStrs.length-1){
      reverseStr += " "
    }
  }
  return reverseStr;
}


console.log(reverse("Hello There") === "There Hello");
console.log(reverse("") === "");
console.log(reverse("The") === "The");
console.log(reverse("Sentence will it prevail") === "prevail it will Sentence");
console.log(reverse("I'll show you") === "you show I'll");
