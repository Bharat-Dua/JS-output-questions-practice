var x = 1;

console.log(x); // 1

function x() {
  console.log("2");
}

x(); // x is not a function due to hoisting
