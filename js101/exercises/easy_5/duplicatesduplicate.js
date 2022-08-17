//Given unordered list of integers
//where every value is unique except 1
  //occurs twice in the list
//Return the value that occurs twice


//Take in array input
function findDup(list){

  for(i = 0; i < list.length-1; i++){
    let number = list[i];
    //make a copy array
    let listCopy = list.slice();
    //remove 1st instance of the current element
    numberPos = listCopy.findIndex(number2 => number === number2 );
    listCopy.splice(numberPos,1);
    //check if array still has that element
    if(listCopy.includes (number)) {
      return number
    }
  }

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
          7, 34, 57, 74, 45, 11, 88, 67,  5, 58]);   // 73
findDup([18,43,2,4,5,7,8,12,13,76,45,78,54,12]);//12
