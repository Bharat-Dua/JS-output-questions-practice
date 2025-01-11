function sum(a) {
  return function (b) {
    if (!b) {
      return a;
    } else {
      return sum(a + b);
    }
  };
}
// or

function sum(num1) {
  return function (num2) {
    if (!num2) {
      return num1;
    }
    return sum(num1 + num2);
  };
}
const res = sum(1)(2)(3)(4)();
console.log(res); // 10
