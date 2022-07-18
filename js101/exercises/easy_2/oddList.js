/*
Write a function that returns an Array that contains every other element of
an Array that is passed in as an argument. The values in the returned list
should be those values that are in the 1st, 3rd, 5th, and so on elements of
the argument Array.
*/function oddList(arr){
  let oddArr = [];
  for(i=0;i<arr.length;i+=2){
    oddArr.push(arr[i]);
  }
  return oddArr;
}
console.log(oddList([2, 3, 4, 5, 6])); // logs [2, 4, 6]
console.log(oddList([1, 2, 3, 4, 5, 6])); // logs [1, 3, 5]
console.log(oddList(["abc", "def"])); // logs ['abc']
console.log(oddList([123])); // logs [123]
console.log(oddList([])); // logs []
