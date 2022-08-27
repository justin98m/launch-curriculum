/*
Write a function that counts the number of occurrences of each element in a
given array. Once counted, log each element alongside the number of
occurrences. Consider the words case sensitive e.g. ("suv" !== "SUV").*/

function displayCount(obj){
  Object.entries(obj).forEach(curr => {
    console.log(`${curr[0]} => ${curr[1]}`);
  })
}
function countOccurrences(strArr){
  seenObj = {};
  strArr.forEach(curr => {
    if(Object.keys(seenObj).includes(curr)){
      seenObj[curr]++;
    } else {
      seenObj[curr] = 1;
    }
  })
  displayCount(seenObj);
}

let vehicles = ['car', 'car','Car', 'truck', 'car', 'SUV','suv', 'truck',
                'motorcycle', 'trUck' ,'motorcycle'
                , 'car', 'truck','Car','trUck'];

countOccurrences(vehicles);

/* console output -- your output sequence may be different
car => 4
truck => 3
SUV => 1
motorcycle => 2
*/
