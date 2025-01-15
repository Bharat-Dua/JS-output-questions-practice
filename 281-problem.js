// will throw an error bcoz when we start a line from {} JS thinks it's a block and in that it's not right way to do.
const obj = { a: "🥭" };
({ x: obj["a"] } = { x: "🍌" });

console.log(obj); // { a : "🍌" }

// now we are destructuring the object with prop x and we are just replacing the a key value
