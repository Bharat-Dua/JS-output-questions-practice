console.log(0 == -0); // true
console.log(0 === -0); // true
console.log(Object.is(0, -0)); // false

//* Bcoz in JS 0,-0 they are same but later we got a method is that works like === in strict mode to really got to know the difference
