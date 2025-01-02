const obj = {};

Object.defineProperty(obj, "a", { value: "char", enumerable: true });
console.log(obj.a); // "char"
console.log(Object.keys(obj)); // ['a'] -> by default when we add a property using defineproperty method they are by default hidden to make them visible and loop over it we add a configurable prop which is enumurable and make them true to visible
