const obj = {
  prop: "Hello",
  method() {
    setTimeout(function () {
      console.log(this.prop); // undefined bcoz regular function points to window object
    }, 1000);
  },
};

obj.method();
