const key = "constructor";
const obj = {};

if (obj[key]) {
  console.log("hello"); // 'hello'
} else {
  console.log("guest");
}

if (key in obj) {
  console.log("hello sir"); // 'hello sir'
} else {
  console.log("hello maam");
}

//* Note:- why it is logged as true bcoz as we know objects inherit its all prop and methods from its prototype so if any prop is not present in obj so it will check into its prototype chain. and there it find the constructor property so it is logged as true. so prevent this type of situation we use hasOwnProperty() method.

//* hasOwnProperty checks only the properties that belong directly to the object, not its prototype chain.

if (obj.hasOwnProperty(key)) {
  console.log("hello");
} else {
  console.log("guest");
}

//* and if you want it should not inherit prop from its prototype chain then use Object.create() method to create object. it will not inherit any prop from its prototypal chain. so it will return false.

if (obj[key]) {
  console.log("hello");
} else {
  console.log("guest"); // 'guest'
}

if (key in obj) {
  console.log("hello sir");
} else {
  console.log("hello maam"); // 'hello maam'
}
