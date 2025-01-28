let user = {
  email: "user@gmail.com",
  updateEmail: (email) => {
    this.email = email;
  },
};

user.updateEmail("newuser@gmail.com");
console.log(user.email); // 'user@gmail.com'
