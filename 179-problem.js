class User {
  constructor(name) {
    this.name = name;
  }

  logIn() {
    // some code
  }
}

const user1 = new User("X");
const user2 = new User("Y");

console.log(user1.logIn === user2.logIn); // true

//* Note :- Because whenever we create a class and whatever we write in constructor function only that part gets created different for every object and all the methods goes into prototype of the class. So when we call a method on an object it first checks in the object itself if it exists then it goes to the prototype of the class. So in this case both user 1 and user2 are accessing the same method from the prototype of the class. So it returns true.
