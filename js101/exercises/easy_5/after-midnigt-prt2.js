/*  Given a time in 24 hour XX:XX format
  Create 2 functions
  *Before Midnight
    which computes the amount of mins bfeore midnight occurs with the given
    time.
  *After Midningt
    which compute the amount of mins after midnight given the current time
  */
const HOURS_IN_DAY = 24;
const MINUTES_IN_HOUR = 60;
const MIDNIGHTMINUTES = HOURS_IN_DAY * MINUTES_IN_HOUR;

function beforeMidnight(time){
  if(time === "00:00")return 0;
  let totalMinutes = 0;
  time = time.split(":");
  hour = Number.parseInt(time[0]);
  min = Number.parseInt(time[1]);

  //add minute mark to hours in min conversion
  totalMinutes = min + (hour * MINUTES_IN_HOUR);
  //Take away sum of time minutes from midnight minutes
  return MIDNIGHTMINUTES - totalMinutes;
  //return that value

}
function afterMidnight(time){
  if(time === "24:00")return 0;
  //convert hours to MINUTe
  let totalMinutes = 0;
  time = time.split(":");
  let hour = Number.parseInt(time[0]);
  let min = Number.parseInt(time[1]);
  //add minute marks in time to hours to min conversion
  return min + (hour * MINUTES_IN_HOUR);
  //return that val
}
console.log(afterMidnight("00:00") === 0);
console.log(beforeMidnight("00:00") === 0);
console.log(afterMidnight("12:34") === 754);
console.log(beforeMidnight("12:34") === 686);
console.log(afterMidnight("24:00") === 0);
console.log(beforeMidnight("24:00") === 0);
