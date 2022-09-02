/* write a function that takes in a string
and doubles the character if its is a consanant
and returns the single iteration of the char if */

//define what a consanant is
const consanants = new RegExp('[b-d,f-h,j-n,p-t,v-z]');
function doubleConsonants(str){
  //loop through string
  doubleStr = str.split("");
  doubleStr = doubleStr.map(cur => {
    if(consanants.test(cur.toLowerCase())){
      return cur + cur
    }
    return cur;
  })
  
  return doubleStr.join("");
}
console.log(doubleConsonants('String') === "SSttrrinngg");          // "SSttrrinngg"
console.log(doubleConsonants('Hello-World!') === "HHellllo-WWorrlldd!");    // "HHellllo-WWorrlldd!"
console.log(doubleConsonants('July 4th') === "JJullyy 4tthh");        // "JJullyy 4tthh"
console.log(doubleConsonants('') === "");                // ""
