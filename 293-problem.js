const obj = { name: "JS" };
const arr = ["name"];

obj[arr] = "react";

console.log(obj.name); // 'react' just overriding the value
