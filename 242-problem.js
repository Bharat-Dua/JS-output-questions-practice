let test = function () {
  console.log("z", this); // 'window object'
  return function () {
    console.log("y", this); // [ 'y', { a: 1, b: λ } ]
  };
};

const obj = {
  a: 1,
  b: test(),
};

obj.b();

//* Note:- to find the value of this always look for left side of function calling.
