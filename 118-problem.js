// make the length 0

let arr = [1, 2, 3, 4];

//* 1. arr.length=0;
arr.length = 0;
console.log(arr); // Outputs: []

//* Assigning a new empty array

let arr = [1, 2, 3, 4];
arr = [];
console.log(arr); // Outputs: []

//* Splice

let arr = [1, 2, 3, 4];
arr.splice(0, arr.length);
console.log(arr); // Outputs: []

//* pop

let arr = [1, 2, 3, 4];
while (arr.length > 0) {
  arr.pop();
}
console.log(arr); // Outputs: []

//* shift

let arr = [1, 2, 3, 4];
while (arr.length > 0) {
  arr.shift();
}
console.log(arr); // Outputs: []
