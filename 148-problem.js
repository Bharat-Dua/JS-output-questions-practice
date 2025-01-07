const marks = [1, 2, 3];
const rollno = [4, 5, 6];

//* Merge these 2 arrays
//* Solve it using 2 ways

//* method 1
const mergedArray = [...marks, ...rollno];
console.log(mergedArray); // Array(6) [ 1, 2, 3, 4, 5, 6 ]

//* method 2
let result = rollno.map((ele) => marks.push(ele));
console.log(marks); // Array(6) [ 1, 2, 3, 4, 5, 6 ]

//* 3 
let merged = marks.concat(rollno)
console.log(merged) // Array(6) [ 1, 2, 3, 4, 5, 6 ]