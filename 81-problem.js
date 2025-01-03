var foo = function test() {
  console.log("inside test");
};
test(); // Reference error: test is not defined bcoz named function expression can't access outside of its scope.
