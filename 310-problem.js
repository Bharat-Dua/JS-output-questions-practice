const a = { count: 0 };

const b = a;
b.count = a.count++;
console.log(a.count, b.count); // [ 0, 0 ]
