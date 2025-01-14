const Person = () => {
  this.name = "JS";
  return this;
};

const person = new Person();

console.log(person.name); // TypeError:- Person is not a constructor bcoz we can't call new keyword using arrow function to make it working we can use regular function
