var foo = "🦅";

function showName() {
  foo = "🦍";
  return;
  function foo() {}
}

showName();
console.log(foo); // '🦅'
