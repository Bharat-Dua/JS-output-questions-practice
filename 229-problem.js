console.log([23, 42] > [89]);
console.log([3] > [2]);

//* BTS code
console.log("[23, 42]" > "[89]"); // '23,42' >'89-> false 2>8
console.log("[3]" > "[2]"); // '3'>'2' ->true 3>2

//* Note:- when we do array comparison in JS then JS convert them into string and then do comparison char by char
