const user = {
  email: "bharatdua13@gmail.com",
  updateEmail: (email) => {
    this.email = email;
  },
};

user.updateEmail("latest@email.in");
console.log(user.email); // 'bharatdua13@gmail.com bcoz arrow function has no this it refer to its parent scope
