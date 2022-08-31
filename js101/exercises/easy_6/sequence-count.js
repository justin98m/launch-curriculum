//Give a count and start variable 
//Create an array that has the lenght of count 
//where start is the first element in the array
//each other elemnt is a multiple of start 

function sequence(count, start){
    let arr = [];
    for(let i = 0; arr.length < count; i++){
        arr.push(start * (i+1));
    }
    console.log(arr);
}
sequence(5, 1);          // [1, 2, 3, 4, 5]
sequence(4, -7);         // [-7, -14, -21, -28]
sequence(3, 0);          // [0, 0, 0]
sequence(0, 1000000);    // []