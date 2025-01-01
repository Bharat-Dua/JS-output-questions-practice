const a = {};
const b = { name: "bharat" };
const c = { name: "paras" };
a[b] = 222;
a[c] = 444;

console.log(a[b]); // 444

//* As we know JS stores object keys as string and here we are setting as key of a object as another object and it will gets converted to string and js will take it as a= { "[object Object]" : 444 } and if we try to add multiple value at same key the last one will gets stored in a object.
