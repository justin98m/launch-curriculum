//give a string in the format of Fname Space Last Name 
//return the string in  the format of LName, Space Fname 

function nameSwap(name){
    let swapped = "";
    name = name.split(" ");
    swapped = name[1] + ", "+ name[0];
    return swapped;
}
console.log(nameSwap('Justin Cameron'));
console.log(nameSwap('Justin Calvin'));
console.log(nameSwap('John Doe'));
console.log(nameSwap('Jane Doe'));
