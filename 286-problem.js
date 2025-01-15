function test() {
  const a = (b = c = "💥");
}

test();

console.log(typeof a); // 'undefined' bcoz a has block scope
console.log(typeof b); // 'string'
console.log(typeof c); // 'string'
