const obj = {};
let key = "constructor";

if (key in obj) {
  console.log("key found"); // 'key found'
} else {
  console.log("not found");
}

//* Note:- in operator if the finding prop is not in object so it checks it into its prototype chain and in the prototype chain there is a constructor property stay there.
