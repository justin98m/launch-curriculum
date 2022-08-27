/*Write a function that takes one argument, an array of integers,
and returns the average of all the integers in the array, rounded
down to the integer component of the average. The array will never be empty,
and the numbers will always be positive integers.
*/

function average(numsArr){
  let sum = numsArr.reduce((total,num) => {
    return total + num
  });
  let average = Math.floor(sum / numsArr.length);
  return average;
}

function averageForEach(numsArr){
  let sum = 0;
  numsArr.forEach(num => sum += num);

  let average = Math.floor(sum / numsArr.length);
  return average;
}
console.log(average([1, 5, 87, 45, 8, 8]));       // 25
console.log(average([9, 47, 23, 95, 16, 52]));    // 40)

console.log(averageForEach([1, 5, 87, 45, 8, 8]));       // 25
console.log(averageForEach([9, 47, 23, 95, 16, 52]));    // 40)
