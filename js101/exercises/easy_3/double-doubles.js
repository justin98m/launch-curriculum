function twice(num){
  num = String(num)
  numDigits = num.length;
  if(numDigits % 2 === 0){
    //console.log(num.slice(0,numDigits/2), num.slice((numDigits/2)));
    if(num.slice(0,numDigits/2) === num.slice((numDigits/2))){
      return Number(num);
    }
  }
  return Number(num) * 2
}
console.log(twice(37));          // 74
console.log(twice(44));          // 44
console.log(twice(334433));      // 668866
console.log(twice(444));         // 888
console.log(twice(107));         // 214
console.log(twice(103103));      // 103103
console.log(twice(3333));        // 3333
console.log(twice(7676));        // 7676
