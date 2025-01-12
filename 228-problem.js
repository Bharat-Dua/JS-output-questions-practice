function isPass() {
  console.log("inside pass");
  return "Pass";
}

function isTopper() {
  console.log("inside topper");
  return "Topper";
}

const msg = isPass() && isTopper();
console.log(`msg = ${msg}`); // 'Topper' bcoz AND operator that's how it works if the first value is true then it execute the second expression and returns that value if the first one is falsy then it doesn't check for second value.
