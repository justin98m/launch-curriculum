/*
The Array.prototype.reverse method reverses the order of elements in an array,
 and Array.prototype.sort can rearrange the elements in a variety of ways,
 including descending. Both of these methods mutate the original array as shown
 below. Write two distinct ways of reversing the array without mutating the
 original array. Use reverse for the first solution, and sort for the second.
  */



function reverse(arr){
  let arrToReverse = arr.slice();
  arrToReverse.reverse();
  return arrToReverse;
}
function sort(arr){
  let arrToReverse = [...arr].sort((a,b) => a -b);
  return arrToReverse
}
function forEachReverse(arr){
  let arrToReverse = [];
  let len = arr.length;
  arr.forEach((current,index) => arrToReverse[len-(index+1)] = current);
  return arrToReverse;
}

let sourceArr = [1,4,-3,5,0,6,17,11];

console.log(`Array at the start of the program : ${sourceArr}`);
console.log(`Array reversed : ${reverse(sourceArr)}`);
console.log(`Array Sorted in reverse order : ${sort(sourceArr)}`);
console.log(`Array reversed using forEach : ${forEachReverse(sourceArr)}`);
console.log(`Array at the end of the program: ${sourceArr}`);
