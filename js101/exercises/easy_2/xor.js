function xor(val1,val2){
  switch(!!val1){
    case true: return (val2 ? false : true);
    case false : return (val2 ? true : false);
  }
}
console.log(xor(1,1));//false
console.log(xor(1,0));//true
console.log(xor(false,"me"));//true
console.log(xor(5,""));//true
console.log(xor(0,0));//fals
