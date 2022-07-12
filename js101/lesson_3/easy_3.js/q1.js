//Write three different ways to remove all of the elements from the following array:
let numbers = [1, 2, 3, 4];
function showNumbers(isEmpty){
  if(isEmpty){
    console.log(`Numbers empty : ${numbers}`);
  } else {
    console.log(`Numbers Full : ${numbers}`);
  }
}
showNumbers(false);

while(numbers.length !== 0){
  numbers.pop();
}
showNumbers(true);

numbers = [1, 2, 3, 4];
showNumbers(false);
numbers = [];
showNumbers(true);



numbers = [1, 2, 3, 4];
showNumbers(false);
numbers = numbers.slice(100000);
showNumbers(true);
