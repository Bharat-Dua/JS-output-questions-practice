let bool1 = false;
let bool2 = new Boolean(false);

if (bool1) {
  console.log("first block"); // bcoz bool1 false
}
if (bool2) {
  console.log("second block"); // second block  bcoz bool2 is a object and object is a truthy value
}
