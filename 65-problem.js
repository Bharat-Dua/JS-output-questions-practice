const person = {
  name: "frontend",
  address: {
    city: "MDNDocs",
  },
};

Object.freeze(person);

person.name = null;
person.address.city = null;
console.log(person); // { name: 'frontend', address: { city: null } } bcoz object.freeze can only freeze upto one level deep. It can't freeze nested objects. So, we can still change the nested object 's properties.

//* to deep freeze the object
function deepFreeze(obj) {
  Object.freeze(obj);
  Object.keys(obj).forEach((prop) => {
    if (typeof obj[prop] === "object" && obj[prop] !== null) {
      deepFreeze(obj[prop]);
    }
  });

  return obj;
}
