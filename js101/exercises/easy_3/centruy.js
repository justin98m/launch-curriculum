function century(year){
  let cen = Math.ceil(year/100);
  cen = String(cen);
  let lastDigit = cen[cen.length-1];

  if(lastDigit == 1 && cen[cen.length-2] != 1){
    console.log(cen + 'st');
  } else if(lastDigit == 2 && cen[cen.length-2] != 1){
    console.log(cen + 'nd');
  } else if(lastDigit == 3 && cen[cen.length-2] != 1){
    console.log(cen + 'rd');
  } else {
    console.log(cen + 'th');
  }
}
century(2000);        // "20th"
century(2001);        // "21st"
century(1965);        // "20th"
century(256);         // "3rd"
century(5);           // "1st"
century(10103);       // "102nd"
century(1052);        // "11th"
century(1127);        // "12th"
century(11201);       // "113th"
