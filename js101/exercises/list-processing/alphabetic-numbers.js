/* Given an array containing ints from 0 to 19 Inclusive  sort the integers
based on thier english alphabtical order */

const ENGLISH_NUMBERS =
  ['zero','one','two','three','four','five','six','seven','eight','nine','ten',
'eleven','twelve','thirteen','fourteen','fifteen','sixteen','seventeen',
'eightteen','nineteen'];

function compareAlpha(num1,num2){
  return num1 < num2 ? -1 : 1;
}

function alphabeticalNumberSort(inputNums){
  let inputAlpha = [];
  let counter = 0;

  inputAlpha = inputNums.map(curr =>{
    return ENGLISH_NUMBERS[curr];
  })

  let alphaSort = inputAlpha.sort(compareAlpha);

  let alphaToNum = alphaSort.map(curr => {
    return ENGLISH_NUMBERS.indexOf(curr);
  })

  return alphaToNum;
}
console.log(alphabeticalNumberSort([1,2,3,4,5,6,7,0]));
console.log(alphabeticalNumberSort([12,12,8,16,4,0,12,9,8]));
console.log(alphabeticalNumberSort([16,5,4,3,2,1,0,0,0,4,5,18]));
console.log(alphabeticalNumberSort([1,1,1,1,1,1,2,2,2,2,2,2,3,3,3,3]));
console.log(alphabeticalNumberSort([14,18,19,0,12,13,13,13,14,18,19,0,10]));
console.log(alphabeticalNumberSort(
   [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19]));
// [8, 18, 11, 15, 5, 4, 14, 9, 19, 1, 7, 17, 6, 16, 10, 13, 3, 12, 2, 0]
