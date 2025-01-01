function Human(firstName, lastName) {
  this.firstName = firstName;
  this.lastName = lastName;
}
const member = new Human("Javascript", "developer");

Human.prototype.getFullName = function () {
  return `${this.firstName} ${this.lastName}`;
};
console.log(member.getFullName()); // will get an type error bcoz as we know function are also object and here we are trying to set getFulllName function as a property and we are storing it in member variable and trying to access it directly to avoid the error we have to set it in prototype of Human object
