(() => {
  let x = (y = 10);
  // break down code it will resolve from right to left and y is undeclared variable so it will gets add into global scope and x has local scope .
  /*
  y=10
  let x=y */
})();

console.log(typeof x); // undefined
console.log(typeof y); // number
