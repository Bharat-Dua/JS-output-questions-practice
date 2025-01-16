var employeID = "abc";

function foo() {
  employeID = "123";
  return;

  function employeID() {}
}

foo();
console.log(employeID); // 'abc'
