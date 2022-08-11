function isPalindromicNumber(num){
  num = String(num).split("");
  numReversed = num.slice().reverse();
  numReversed = numReversed.join("");
  num = num.join("")
  return num === numReversed;
}
console.log(isPalindromicNumber(34543));        // true
console.log(isPalindromicNumber(123210));       // false
console.log(isPalindromicNumber(22));           // true
console.log(isPalindromicNumber(000050000));            // true
