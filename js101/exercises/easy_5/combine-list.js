/* Combine two arrays into one where each elemnt alternates between the
two origninal arays
ex arr1 = [1,3,5,7] arr2 = [2,4,6,8];
combined arr = [1,2,3,4,5,6,7,8]

*/
function interleave(arr1,arr2){
  let combined = [];
  let subArrPos = 0;
  let addArr1 = true;
  let addArr2 = false;

  while(subArrPos < arr1.length){
    combined.push(arr1[subArrPos],arr2[subArrPos]);
    subArrPos++;
  }
  return combined;
}

console.log(interleave([1, 2, 3], ['a', 'b', 'c']));
console.log(interleave([1,3,5,7],[2,4,6,8]));
