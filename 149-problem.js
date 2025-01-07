let arr = ["a", "b", "c"];

// Insert 'z' at 0
// output : ['z','a','b','c']

//* method 1
arr.unshift("z");
console.log(arr); // [ 'z', 'a', 'b', 'c' ]

//* method 2
arr.splice(0, 0, "z");
console.log(arr); // [ 'z', 'a', 'b', 'c' ]

//* method 3
arr = ["z", ...arr];
console.log(arr); // [ 'z', 'a', 'b', 'c' ]
