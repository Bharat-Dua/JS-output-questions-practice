const a = 1 + undefined;
const b = 1 + typeof c;

console.log(a); // NaN
console.log(b); // '1undefined because of automatic type coercion… if any type is string Js prefers string concatenation… and if both of type is other than number, only than addition is performed
