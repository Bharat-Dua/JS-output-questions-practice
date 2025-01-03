const add = (x) => (y) => (z) => {
  console.log(x, y, z); // [1,2,3]
  return x + y + z;
};
console.log(add(1)(2)(3));

//* using regular function

function add(a) {
  return function (b) {
    return function (c) {
      return a + b + c;
    };
  };
}

console.log(add(2)(5)(4));
