var person = {
  name: "sam",
  hello: function () {
    console.log(this.name); // 'sam'
  },
};

person.hello();
