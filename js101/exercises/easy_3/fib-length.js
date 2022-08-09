let fibSequence = [1,1,2,3,5,8];
function calculateNextFib(){
  let lastVal = BigInt(fibSequence[fibSequence.length-1]);
  let secondToLastVal = BigInt(fibSequence[fibSequence.length-2]);
  let nextVal = BigInt(lastVal + secondToLastVal);
  fibSequence.push(nextVal);
}
function findFibIndexByLength(n){
  fibSequence = [1,1,2,3,5,8];
  while(true){
    calculateNextFib();
    let lastIndex = BigInt(fibSequence.length - 1) ;
    let lastIndexValue = BigInt(fibSequence[lastIndex]);
    if(BigInt(String(lastIndexValue).length) === n){
      return lastIndex + 1n;
    }
  }
}
console.log(findFibIndexByLength(2n) === 7n);
console.log(findFibIndexByLength(3n) === 12n);
console.log(findFibIndexByLength(4n) === 17n);
console.log(findFibIndexByLength(16n) === 74n);
console.log(findFibIndexByLength(100n) === 476n);
console.log(findFibIndexByLength(10n) === 45n);
console.log(findFibIndexByLength(1000n) === 4782n);
console.log(findFibIndexByLength(10000n) === 47847n);
