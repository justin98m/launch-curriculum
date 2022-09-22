/*Take in an array of numbers
compute the sum of each set of values form 0 to length - 1
where sets are [0],[0,1],[0,1,2],[0,1,2 ... n];

*/


//take in the array
function sumOfSums(arr){
  //keep a sum variable and init it pos[0]
  let sum = 0;
  //iterate through the array in order by pos starting at 1
  let sumList = arr.map((curr) => {
    sum += curr;
    return sum;
  })
  return sumList.reduce((totalSum,curr) => {
    return curr + totalSum;
  })

}
console.log(sumOfSums([3,5,2]));
console.log(sumOfSums([1,5,7,3]));
console.log(sumOfSums([4]));
