const arr = [
  { id: 31, marks: 55 },
  { id: 77, marks: 4 },
  { id: 22, marks: 53 },
];

// check if any students is fail
const passing_marks = 33;

let isFailed = arr.some((ele) => ele.marks < passing_marks);
console.log(isFailed); // true

//* some method just check if any element is satisfying the condition or not if yes it returns true otherwise false.
