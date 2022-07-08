/*
The Array.prototype.reverse method reverses the order of elements in an array,
 and Array.prototype.sort can rearrange the elements in a variety of ways,
 including descending. Both of these methods mutate the original array as shown
 below. Write two distinct ways of reversing the array without mutating the
 original array. Use reverse for the first solution, and sort for the second.
  */

/*
What confuses me a bit about this problem is the ask of using mutating functions
like reverse and sort to reverse and sort an array without mutating the arrays.
My assumption is that you can mutate the arrays as long as by the end of the
program they are back to their original state
*/

function reverse(arr){
  arr.reverse();
  //should return a copy of the array
  let arrToReverse = arr.slice();
  arr.reverse();
  return arrToReverse;
}
function sort(arr){
  let temp = [...arr];
  arr.sort((a,b) => a - b);
  console.log(temp );
  let arrToSort = arr.slice();
  arr = temp;
  console.log(arr );
  return arrToSort;
}
let sourceArr = [1,4,-3,5,0,6,17,11];
console.log(`Array at the start of the program : ${sourceArr}`);
console.log(`Array reversed : ${reverse(sourceArr)}`);
console.log(`Array Sorted : ${sort(sourceArr)}`);
console.log(`Array at the end of the program: ${sourceArr}`);
