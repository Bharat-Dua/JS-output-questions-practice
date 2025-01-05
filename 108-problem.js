console.log("A")(async function () {
  const x = await 5;
  console.log("c");
})();
console.log("b");

// order of output
// A b c bcoz all the code after the await keyword is put into microtask queue(promise queue)

//* Micro task queue gets executed when main call stack is empty.
