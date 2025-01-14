const arr = new Array(4);
console.log(arr); // [undefined, undefined, undefined, undefined ]
console.log("length", arr.length); // [ 'length', 4 ]

arr.forEach(function () {
  console.log("inside foreach");
});

//* Bcoz foreach loop needs an index to loop over array elements
