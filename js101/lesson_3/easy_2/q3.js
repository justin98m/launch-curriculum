//Given a number and an array, determine whether the number is included
//in the array.

let numbers = [1, 2, 3, 4, 5, 15, 16, 17, 95, 96, 99];

let number1 = 8;  // false
let number2 = 95; // true

//find returns undefined if the val cant be found
console.log(numbers.find(elm => elm === number1) !== undefined);
console.log(numbers.find(elm => elm === number2) !== undefined);
//findIndex returns -1 if the val cant be found
console.log(numbers.findIndex(elm => elm === number1) !== -1);
console.log(numbers.findIndex(elm => elm === number2) !== -1);
//filter returns empty string if no elements evalutae as true aka 0 length 
console.log(numbers.filter(elm => elm === number1).length !== 0);
console.log(numbers.filter(elm => elm === number2).length !== 0);
