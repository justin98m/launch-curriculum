let regex = new RegExp('[a-zA-z]');
function cleanUp(sent){
  sent = sent.split("");
  sent.forEach((curr,i) => {
    if(!regex.test(curr)){
       sent[i] = " ";
     }
  })

  for(i=0;i<sent.length-1;i++){
    if(sent[i] === " " && sent[i+1] === " "){
      sent.splice(i,1);
      i--;
    }
  }
  return(sent.join(""))
}
console.log(cleanUp("---what's my +*& line?"));    // " what s my line ")
