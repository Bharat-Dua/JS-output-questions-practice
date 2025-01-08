const arr = [1, 2, 3, 4];

console.log(1 in arr); // true
console.log(2 in arr); // true
console.log(4 in arr); // false

//* bcoz in operator only check if that particular key exist or not in object and as we know array BTS is treated as object so index of array is treated as key in object and value is treated as value in object . so here array index checking the key of object which is 0,1,2,3 so 4 is not exist in object

console.log(Object.keys(arr)); // [0,1,2,3]
