const person = {
  name: "frontendMaster",
};

Object.seal(person);

person.name = "backend";
person.skill = "JS";

delete person.name;

console.log(person); // { name: 'backend' }

//* object.seal->  update,not add,not delete
//* object.freeze-> not update,not add,not delete
