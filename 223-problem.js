function madhushala() {
  return foo;
  console.log("yo");
  foo = 10;
  function foo() {}
  var foo = "11";
}
console.log(typeof madhushala()); // 'function' bcoz of hoisting and function declaration have more priority than variable declaration
