//using the object provided
//creat and array with the Barney key and value only

let flintstones = { Fred: 0, Wilma: 1, Barney: 2, Betty: 3, Bambam: 4, Pebbles: 5 };
let barney = Object.entries(flintstones)[2];
console.log(barney);
