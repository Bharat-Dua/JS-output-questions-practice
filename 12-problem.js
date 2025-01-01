function Human(fName, lName) {
  this.firstName = fName;
  this.lastName = lName;
}

const MrX = new Human("Mr", "X");
const Rock = Human("The", "Rock");

console.log(MrX); // MrX { firstName: 'Mr', lastName: 'X' }
console.log(Rock); // undefined->bcoz now js will consider a normal function and this value in normal function referes to global object and will set the property in global object and it's not returning anything that's why.

//* we can acess them in global
console.log(firstName); // The
console.log(lastName); //  Rock
