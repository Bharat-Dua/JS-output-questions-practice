const add = true;
const obj = {};

// Add key in object, conditionaly

// traditional way

if (add) {
  obj.name = "bharat";
}

// modern way
const objKey = { ...(add && { key: 3 }) };
console.log(objKey); // output: { key: 3 }  here spread operator is used to shallow copy
