class Person {
  constructor() {
    this.name = "Frontend";
  }
}

Person = class AnotherPerson {
  constructor() {
    this.name = "Master";
  }
};

const member = new Person();
console.log(member.name); // "Master" bcoz it's normal to assign a class to a variable.As we know we can create class using class expression syntax and that's what we are doing here.
