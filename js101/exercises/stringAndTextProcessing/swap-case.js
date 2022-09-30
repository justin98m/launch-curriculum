//Given a string
  //return a string with
    //all original lower case chars uppercased
    //all original uppercased chars lowercased
    //non alpha chars unchanged

function swapCase(string){
  let stringArr = string.split("");
  string = stringArr.map(char => {
      //lowercase to upper
      if(/[a-z]/.test(char)){
        return char.toUpperCase();
      } else if(/[A-Z]/.test(char)){ //uppercase to lowercase
        return char.toLowerCase();
      } else { //do nothing to non alpha chars
        return char;
      }
    })
    return string.join("");
}
console.log(swapCase('CamelCase'));              // "cAMELcASE"
console.log(swapCase('Tonight on XYZ-TV'));      // "tONIGHT ON xyz-tv"
