// add two number without using + operator
const num1 = 30;
const num2 = 40;

//* method 1
let result = num1 - -num2;
console.log(result); // output: 70

//* method 2
let result2 =
  2 * Math.max(num1, num2) - (Math.max(num1, num2) - Math.min(num1, num2));
result2;
console.log(result2); // output: 70

//* method 3
function addNumbers(num1, num2) {
  for (let i = 0; i < num2; i++) {
    console.log(i);
    num1++;
  }
  return num1;
}

console.log(addNumbers(5, 3)); // Output: 8
console.log(addNumbers(10, 20)); // Output: 30
console.log(addNumbers(-5, 7)); // Output: 2
console.log(addNumbers(4, -2)); // Output: 2
