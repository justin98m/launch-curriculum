//Determine whether the following object of people and their age contains an
//entry for 'Spot':

let ages = { Herman: 32, Lily: 30, Grandpa: 402, Eddie: 10 };

if(ages.hasOwnProperty('Spot')){
  console.log('Spot Detected');
} else {
  console.log('Does not have spot');
}
