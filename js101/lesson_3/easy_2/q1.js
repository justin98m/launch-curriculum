/*Given a string, return a new string that replaces every occurrence of the word
 "important" with "urgent"
 */

let advice = "Few things in life are as important as house training your pet dinosaur.";
let mess = "This message is important very very important. Please respond important";

advice = advice.replace('important','urgent');
while (mess.includes('important')) {
  mess = mess.replace('important','urgent');
}

console.log(advice);
console.log(mess);
