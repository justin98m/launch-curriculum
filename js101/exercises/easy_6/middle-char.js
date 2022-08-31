function centerOf(str){
    let len = str.length;
    if(len % 2 === 0){
        console.log(str.slice((len/2)-1,(len/2)+1));
    } else {
        console.log(str[Math.floor(len/2)]);
    }
}
centerOf('I Love JavaScript'); // "a"
centerOf('Launch School');     // " "
centerOf('Launch');            // "un"
centerOf('Launchschool');      // "hs"
centerOf('x');                 // "x"