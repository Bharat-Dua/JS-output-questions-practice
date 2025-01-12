// throw error if user try to call the person function without using new keyword

//* method 1
// enable 'use strict'

//* method 2
function Person(name) {
  if (!new.target) {
    throw new Error("add new keyword");
  }
  this.name = name;
}
const person1 = new Person("john");
console.log(person1); // Person { name: 'john' }
const person2 = Person("john");
console.log(person2); // 'add new keyword'
console.log("works");
