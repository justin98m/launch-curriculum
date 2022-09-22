/*given 2 arrays
  -compute and store all products in a new array
  -where each value in both arrays are multiplied against each other
  -Then sort the products in ascending order
*/

function productPairs(arr1,arr2){
  let productArr = [];

  arr1.forEach((arr1Curr) => {
    arr2.forEach((arr2Curr) =>{
      productArr.push(arr1Curr * arr2Curr);
    })
  })

  productArr.sort((a,b)=> {
    return a-b;
  })
  console.log(productArr);
}

productPairs([2, 4], [4, 3, 1, 2]);    // [2, 4, 4, 6, 8, 8, 12, 16]
productPairs([4,2,1,5],[3,2]);
