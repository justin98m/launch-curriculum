/*
Given a value of minutes
  compute the amount of time that has passed since midnight
  where a positive value is the number of minutes after midnight
  and a negative value is the number of minutes before midnight
  represent the time in xx:xx 24 hr format
  */

function formatTime(hour,min){
  hour = String(hour);
  min = String (min);
  if(hour.length < 2){
    hour = '0' + hour;
  }
  if(min.length < 2 ){
    min = '0' + min;
  }
  return hour + ":" + min;
}
function negativeMins(numMins){
  let hour = Number.parseInt(numMins/60);
  let min = numMins - (hour*60);
  if(min < 0){
    min = 60 + min;
    hour -= 1;
  }
  while(hour < -23){
    hour += 24;
  }
  if(hour < 0){
    hour = 24 + hour;
  }

  return formatTime(hour, min);

}
function positiveMins(numMins){
  let hour = Number.parseInt(numMins/60);
  let min = numMins - (hour*60);
  while(hour > 23){
    hour -= 24;
  }
  return formatTime(hour,min);
}


function timeOfDay(numMins){
  if(numMins < 0){
    return negativeMins(numMins);
  } else if(numMins > 0){
    return positiveMins(numMins);
  } else{
    return formatTime(0,0)
  }
}


console.log(timeOfDay(0) === "00:00");
console.log(timeOfDay(-3) === "23:57");
console.log(timeOfDay(35) === "00:35");
console.log(timeOfDay(-1437) === "00:03");
console.log(timeOfDay(3000) === "02:00");
console.log(timeOfDay(800) === "13:20");
console.log(timeOfDay(-4231) === "01:29");
