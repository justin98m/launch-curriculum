
function reverseNumber(num){
    let reverseArr = "";
    num = String(num);
    for(let i = num.length-1; i > -1;i--){
        reverseArr += num[i];
    }
    console.log(parseInt(reverseArr));
    return Number.parseInt(reverseArr);
}
reverseNumber(12345) ===  54321;
reverseNumber(12213) === 31221;
reverseNumber(456) === 654;
reverseNumber(12000) ===   21 //-- Note that leading zeros in the result get dropped!
reverseNumber(1) === 1;