const arr = new Array(2);

console.log(arr); // [ undefined, undefined ]
arr.forEach((elem) => console.log("smile"));

// foreach loop needs index to loop over

//* ways to make an array

1.
[...arr].forEach((elem) => console.log("smile"));

2.
Array.from(arr).forEach(elem=> console.log("smile"))   

3.
const arr = new Array(2).fill(0);

console.log(arr); // [ undefined, undefined ]
arr.forEach((elem) => console.log("smile"));