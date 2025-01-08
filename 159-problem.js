const a = { fn: function () {} };
const b = [function () {}];

const strA = JSON.stringify(a);
const strB = JSON.stringify(b);

console.log(strA); // '{}'
console.log(strB); // '[null]' bcoz array has to preserve its length so it just replace the function with null.

//* JSON doesn't support functions,undefined,symbol properties just omit it and skipped by JSON.stringify.
