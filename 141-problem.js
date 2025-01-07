const arr = [
  { id: 31, marks: 55 },
  { id: 77, marks: 34 },
  { id: 22, marks: 53 },
];

// check if all students are pass
const passing_marks = 33;

let result = arr.every((ele) => ele.marks > passing_marks);
console.log(result); // true
