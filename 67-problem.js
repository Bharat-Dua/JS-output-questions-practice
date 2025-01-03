const handler = {
  set: () => console.log("added a new property"), // "added a new property"
  get: () => console.log("accessed a property!"), // "accessed a property!"
};

const person = new Proxy({}, handler);

person.name = "frondend";
person.name;
