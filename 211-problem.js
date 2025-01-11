const arr = [1, 2, 3, 4, 5];

// 1. Filter odd number
// 2. Square each number

// Give 2 solution

//* method 1
let result = arr.filter((ele) => ele % 2 == 0).map((ele) => ele * ele);
console.log(result); // [ 4,16 ]

//* method 2
// using flatmap
let output = arr.flatMap(n=>n%2==0?n*n:[])
console.log(output)
