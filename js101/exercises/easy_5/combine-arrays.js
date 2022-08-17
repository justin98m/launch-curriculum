/* Take two arrays as an argument
Combine the two arrays and remove any duplicate values forming a union
*/
function union(arr1, arr2){
  let uniqueElements = [];
  let combinedArr = arr1.concat(arr2);

  combinedArr.forEach((elm) => {
    if(!uniqueElements.some(curr => curr === elm)) {
      uniqueElements.push(elm)
    }
  });
  console.log(uniqueElements);

}
union([1, 3, 5], [3, 6, 9]);    // [1, 3, 5, 6, 9]
union([1,23,1,9,4],[2,6,7,7,77,8,9,1])//[1,23,9,4,2,6,7,77,8]
