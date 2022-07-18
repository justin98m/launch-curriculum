//writ a function that takes one integer
  //can be positive , negative or zero
  //function returns true iff the abs(argument) is odd
  //assume argument is always a valid int

  function isOdd (num) {
    num = Math.abs(num);
    return !(num % 2 === 0);
  }

  console.log(`8 is odd? ${isOdd(8)}`);
  console.log(`-3 is odd? ${isOdd(-3)}`);
  console.log(`0 is odd? ${isOdd(0)}`);
  console.log(`-0 is odd? ${isOdd(-0)}`);
  console.log(`220941 is odd? ${isOdd(220941)}`);
  console.log(`-555555 is odd? ${isOdd(-55555)}`);
