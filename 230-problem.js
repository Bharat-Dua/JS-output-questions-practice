function isPass() {
  console.log("inside pass");
  return 0;
}

function isTopper() {
  console.log("inside topper");
  return false;
}

const msg = isPass() || isTopper();
console.log(`msg = ${msg}`); // false

//* OR (||) :- Keep looking for its first truthy value and if not get it just executes the last one.
