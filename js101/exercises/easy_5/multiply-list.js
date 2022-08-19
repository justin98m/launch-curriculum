/* take two arrays containing x elemnts
  return an array where each correlating position from both arrays are multiplied

  */

  function multiplyList(arr1,arr2){
    let multipliedList = arr1.map((element,i) =>{
      return element * arr2[i];
    })
    return multipliedList;
  }

  console.log(multiplyList([3, 5, 7], [9, 10, 11]));    // [27, 50, 77]
  console.log(multiplyList([],[])) //[]
  console.log(multiplyList([1.5,2.5,3.5,4.5],[2,4,5,8])) //[3,10,17.5,36];
