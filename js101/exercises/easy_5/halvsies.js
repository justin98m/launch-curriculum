/* Take an array and split it into two subarrays within one 2d arrays
where the first n/2 elements arr in subarray 1 and the second n/2 element are
in the second sub array. If odd length add the middle elm to the first sub array
*/

function halvsies(arr){
  let twoD = [];
  let len = arr.length;
  let stopPoint = Math.ceil(len/2);
  twoD.push(arr.slice(0,stopPoint),arr.slice(stopPoint))
  console.log( twoD);

}
halvsies([1, 2, 3, 4]);       // [[1, 2], [3, 4]]
halvsies([1, 5, 2, 4, 3]);    // [[1, 5, 2], [4, 3]]
halvsies([5]);                // [[5], []]
halvsies([]);                 // [[], []]
