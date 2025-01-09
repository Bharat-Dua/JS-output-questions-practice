// make sure only numbers are passed in add function.
// throw error if any other data type is passed.

function checkValidNumber(...args) {
  for (const element of args) {
    if (typeof element !== "number") {
      throw new Error("Invalid input. Only numbers are allowed.");
    }
  }
}

function add(n1, n2) {
  checkValidNumber(n1, n2);
  return n1 + n2;
}

console.log(add("a", 23)); // Error
console.log(23, 23); // 46
