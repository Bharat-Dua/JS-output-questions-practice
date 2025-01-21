const obj = { a: "JS" };

const { a, a: b, a: c } = obj;
console.log(a, b, c); // [ 'JS', 'JS', 'JS' ]
