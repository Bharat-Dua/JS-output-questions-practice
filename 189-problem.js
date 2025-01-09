// Give 3 ways to differentiate b/w float and integer

//* way 1
function isInteger(num) {
  return Number.isInteger(num);
}

//* way 2
function isInteger(num) {
  return num % 1 === 0;
}

//* way 3
function isInteger(num) {
  return `${num}`.includes(".");
}

//* way 4 most reliable way
function isInteger(num) {
  return typeof num === "number" && Number.isFinite(num) && num % 1 === 0;
}

console.log(isInteger(2)); 
console.log(isInteger(12.5));
console.log(isInteger(-2.5));
