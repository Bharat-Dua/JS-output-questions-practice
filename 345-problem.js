// compare two arrays

const arr1 = [1, 2, 3, 4, 5];
const arr2 = [1, 2, 3, 4, 5];

//* method 1 - convert to string
console.log(arr1.toString() === arr2.toString()); // true

//* method 2 - change length

const a1 = [1, 2, 3, 4, 5];
const a2 = [1, 2, 3, 4, 5, 6];
console.log(a1.length === a2.length); // false

//* method 3 - JSON.stringify()
console.log(JSON.stringify(a1) === JSON.stringify(a2)); // false

//* method 4 - using every

console.log(
  a1.length === a2.length && a1.every((val, index) => val === a2[index])
); // false

//* method 5 -
const a3 = [1, 2, 3, [4, 5]];
const a4 = [1, 2, 3, [4, 5]];
console.log(JSON.stringify(a3) === JSON.stringify(a4)); // true when we have same element and order of element
