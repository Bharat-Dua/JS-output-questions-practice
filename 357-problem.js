const obj = {
  prop: "hello",
  method() {
    (() => console.log(this.prop))(); // 'hello'
  },
};

obj.method();
