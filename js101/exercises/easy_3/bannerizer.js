/*Write a function that will take a short line of text,
and write it to the console log within a box.
*/

function putInBox (str) {
  if (str === "") {
    str = " ";
  } else {
    str = " " + str + " ";
  }
  console.log(`+${'-'.repeat(str.length)}+`);
  console.log(`|${" ".repeat(str.length)}|`);
  console.log("|" + str + "|");
  console.log(`|${" ".repeat(str.length)}|`);
  console.log(`+${'-'.repeat(str.length)}+`);

}
putInBox("Where the Wild Things Are");
putInBox("");
