// Sort the array using age key
const arr = [
  { name: "x", age: 1 },
  { name: "d", age: 13 },
  { name: "u", age: 3 },
  { name: "a", age: 9 },
];
arr.sort((a, b) => a.age - b.age);

console.log(arr);
//* output
[
  { name: "x", age: 1 },
  { name: "u", age: 3 },
  { name: "a", age: 9 },
  { name: "d", age: 13 },
];
