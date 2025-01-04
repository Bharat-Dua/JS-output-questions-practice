function sum() {
  return 2 + 2;
}
function sqr() {
  return 4 * 4;
}

let a = (sum(), sqr());
console.log(a); // 16 bcoz of comma operator 
