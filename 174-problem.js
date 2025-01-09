// Convert this set to array using 3 different ways:-

const mySet = new Set([1, 2, 3]);

//* method 1

const way1 = [...mySet];
console.log(way1); // [1,2,3]

//* method 2
const way2 = Array.from(mySet);
console.log(way2); // [1,2,3]

//* method 3
const way3 = new Array(...mySet);
console.log(way3); // [1,2,3]
