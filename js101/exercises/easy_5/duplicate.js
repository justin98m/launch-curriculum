//Given unordered list of integers
//where every value is unique except 1
  //occurs twice in the list
//Return the value that occurs twice

function findLast(num, numberUL){
  let pos = numberUL.length-1;
  let numpos = null;
  while(true){
    if(num === numberUL[pos]){
      numpos = pos;
      break;
    }
    pos--;
  }
  return numpos;
}

//assign data to numberUl
function findDup(numberUL){
  let duplicate = null;
  //While you dont where duplicate is
  while(!duplicate){
  //Use every value to check for a duplicate of itself excluding its own position
    numberUL.forEach(thisNumber =>{
      let firstPos = numberUL.findIndex(num => num === thisNumber );
      let secondPos = findLast(thisNumber,numberUL);
      //If the first and last instance of an elm are different
      if (firstPos !== secondPos) {
        console.log(`first : ${firstPos} , Second: ${secondPos}`);
        duplicate = numberUL[firstPos];  // you now know where the duplicate is
        }
      })
}
console.log(duplicate);
}
//test data
findDup([1, 5, 3, 1]);                                // 1
findDup([18,  9, 36, 96, 31, 19, 54, 75, 42, 15,
         38, 25, 97, 92, 46, 69, 91, 59, 53, 27,
         14, 61, 90, 81,  8, 63, 95, 99, 30, 65,
         78, 76, 48, 16, 93, 77, 52, 49, 37, 29,
         89, 10, 84,  1, 47, 68, 12, 33, 86, 60,
         41, 44, 83, 35, 94, 73, 98,  3, 64, 82,
         55, 79, 80, 21, 39, 72, 13, 50,  6, 70,
         85, 87, 51, 17, 66, 20, 28, 26,  2, 22,
         40, 23, 71, 62, 73, 32, 43, 24,  4, 56,
          7, 34, 57, 74, 45, 11, 88, 67,  5, 58]);    // 73
findDup([18,43,2,4,5,7,8,12,13,76,45,78,54,12]);//12
