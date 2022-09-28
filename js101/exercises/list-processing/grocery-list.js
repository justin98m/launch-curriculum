/* Given a grocery list in the form of a 2d array
where the first element in the sub array is the item and the 2nd is the quantity
return a 1D array that display each item as many times as its displayed quantity
*/

function duplicateItem(arr,item,qty){
  for(i = 0; i < qty; i++){
    arr.push(item);
  }
}
//Take in 2d array list
function buyFruit(fruitList){
  let singleList = [];
  fruitList.forEach((item) => {
    duplicateItem(singleList,item[0],item[1]);
  });
  return singleList;
}
console.log(buyFruit([['apple', 3], ['orange', 1], ['banana', 2]]));
// returns ["apple", "apple", "apple", "orange", "banana", "banana"]);
