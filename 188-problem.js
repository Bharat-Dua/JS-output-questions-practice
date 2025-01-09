let num = 2;

let foo = !--num; // foo is now 1, num is now 1, 1 is truthy and ! will make it falsey, so foo is false
let bar = !--num; // bar is now 0, num is now 0, 0 is falsey and ! will make it truthy, so bar is true.

console.log(foo); // false
console.log(bar); // true
