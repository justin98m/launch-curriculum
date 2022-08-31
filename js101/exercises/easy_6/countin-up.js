//given a int greater than 0 return a sequence from 1 to num inclusive
function countingUp(num){
    let arr = [1];
    for(let i=1;arr.length < num;i++){
        arr.push(arr[i-1]+1);
    }
    return arr;
}
console.log(countingUp(10));
console.log(countingUp(3));
console.log(countingUp(1));
console.log(countingUp(12));
console.log(countingUp(4));
console.log(countingUp(5));
console.log(countingUp(6));