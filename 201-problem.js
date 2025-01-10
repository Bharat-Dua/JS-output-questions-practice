const {
  a = "default",
  b = "default",
  c = "default",
  d = "default",
  e = "default",
} = { a: null, b: undefined, c: false, d: 0 };

console.log({ a, b, c, d, e }); // { a: null, b: 'default', c: false, d: 0, e: 'default' }

//* here we are using object destructuring concept and if any key has a value undefined it will use the default value and expect undefined it will print their value
