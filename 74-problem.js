const obj = { name: "JS" };
obj.ref = obj;

const str = JSON.stringify(obj);
console.log(str); // TypeError:- Converting circular structure to JSON -->
