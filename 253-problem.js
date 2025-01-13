function sum(num1, num2) {
  return arguments[0] + arguments[1];
}

console.log(sum(10 + 10)); // 20

// if we run the above code we would get 20 , but if we change the param value then would happen

function sum(num1, num2) {
  num1 = 100;
  num2 = 200;
  return arguments[0] + arguments[1];
}

console.log(sum(10, 10)); // 300

//* Note:- yes if we change the param value the special argument keyword gets overrite easily. to protect this we can simply use 'use strict'.

function sum(num1, num2) {
  "use strict";
  num1 = 100;
  num2 = 200;
  return arguments[0] + arguments[1];
}

console.log(sum(10, 10)); // 20
