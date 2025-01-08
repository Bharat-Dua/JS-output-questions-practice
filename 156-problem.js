const objX = { name: "JS" };
const objY = { name: "React" };

let a = {};

a[objX] = 11;
a[objY] = 21;

console.log(a[objX]); // 21 bcoz of setting obj as key in string
