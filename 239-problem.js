// Give three ways to differentiate b/w float and integer

function isInteger(num) {
  //* method 1
  return num % 1 === 0;
  //* method 2
  return !`${num}`.includes(".");
  //* method 3
  return Number.isInteger(num);
}

console.log(isInteger(2));
console.log(isInteger(1.52));
console.log(isInteger(-2.1));
console.log(isInteger(-2.1));
