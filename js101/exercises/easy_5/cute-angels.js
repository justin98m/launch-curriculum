/*
Write a function that takes a floating point number representing an angle
between 0 and 360 degrees and returns a string representing that angle in
degrees, minutes, and seconds. You should use a degree symbol (˚) to represent
degrees, a single quote (') to represent minutes, and a double quote (") to
represent seconds. There are 60 minutes in a degree, and 60 seconds in a minute.
*/
const degreeLabel = "\u00B0"
const minuteLabel = "'";
const secondsLabel = '"';
function stringConversion(unit){
  unit = String(unit);
  if(unit.length === 1){
    unit = '0' + unit;
  }

}
function displayConversions(units){
  let display = units.degrees + degreeLabel + units.minutes + minuteLabel;
  display += units.seconds + secondsLabel;
  console.log(display);
}
function stringConversion(units){
  units = Object.entries(units);
  units = units.map(unit => {
    unit[1] = String(unit[1]);
    if(unit[1].length === 1){
      unit[1] = '0' + unit[1];
    }
    return unit;
  });
  units = Object.fromEntries(units)
  displayConversions(units)
}
function dms(angle){
  let units = {
    "degrees" : 0,
    "minutes": 0,
    "seconds" : 0
   }
   if(angle === 0){
    return stringConversion(units);
   }else if(angle === Number.parseInt(angle)){
     units.degrees = angle;
     return stringConversion(units)
   }else{
     units.degrees = Number.parseInt(angle);
     //convert minutes againsts leftover degrees
     //console.log(`${angle} - ${units.degrees} = ${angle- units.degrees}`);
     angle -= units.degrees
     //units.minutes = 100* parseFloat(String(angle*.06).slice(0,3));
     units.minutes = Number.parseInt(100 * angle * .6);
     //set angle to remainder of minutes
     angle = (angle * .6) - Number( String(angle * .6).slice(0,4));
     units.seconds = Number.parseInt((10000* angle * .6));
     stringConversion(units)
   }


  //console.log(units,skipConversions);
}
dms(30);           // 30°00'00"
dms(76.73);        // 76°43'48"
dms(254.6);        // 254°35'59"
dms(93.034773);    // 93°02'05"
dms(0);            // 0°00'00"
dms(360);          // 360°00'00" or 0°00'00"
