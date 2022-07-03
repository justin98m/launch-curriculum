/*
  Build a program that gets user input for
    Length and width of a room in meters
    log the area of the room in feet and meters
    no need to validate input
  */

const readline = require('readline-sync');
const FEET_IN_METER = 3.28084;

console.log("I will calculate the area of a room with a Length and width in meters");

let metricWidth = Number(readline.question('Enter the Width: '));
let metricLength = Number(readline.question('Enter the Length: '));
let imperialWidth = metricWidth * FEET_IN_METER;
let imperialLength = metricLength * FEET_IN_METER;

console.log(`The area of your room in meters ${metricWidth * metricLength}`);
console.log(`The area of your room in Feet ${imperialWidth * imperialLength}`)
