const obj = Object.create(null);
const keyToCheck = "randomkey";

//* Note:- when we create an object using Object.create and pass null so it creats a new object with blank and it sets its propotype null(blank object) so that's why there is no such hasOwnProperty in the object prototype it gets easily shadow(overrite)
// if (obj.hasOwnProperty(keyToCheck)) {
//   // Type error :- obj.hasOwnProperty is not a function
//   console.log("key found");
// } else {
//   console.log("key not found");
// }

//* to avoid this to check if any key exist in the obj or not
//* we should use hasOwn method bcoz it exist in the obj prototype and it's a static method . doesn't affect the prop if overrite

if (Object.hasOwn(obj, keyToCheck)) {
  console.log("key found");
} else {
  console.log("key not found"); // 'key not found'
}

//* Works for Null Prototype Objects: Since Object.hasOwn() doesn’t rely on the prototype chain, it works even if the object has no prototype.
//* Ignores Shadowed Methods: It directly checks for own properties without being affected by shadowed methods.
