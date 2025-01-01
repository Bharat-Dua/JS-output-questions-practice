function sayHi() {
  return (() => 0)();
}

console.log(typeof sayHi()); // "number" because here we are checking return value type
