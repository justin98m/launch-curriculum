/*
Create a function that takes 2 arguments, an array and an object. The array will
 contain 2 or more elements that, when combined with adjoining spaces, will
  produce a person's name. The object will contain two keys, "title" and
  "occupation", and the appropriate values. Your function should return a
  greeting that uses the person's full name, and mentions the person's title.
  */

function greetings (person,profession) {
  console.log(`Hello ${person[0]} ${person[1]}`);
  console.log(`I hope you enjoy working as a ${profession.title} `);
}

greetings(['Kustin','Cameron'],{title:'barback',occupation: 'Brewery'});
