new Promise((resolve) => {
  resolve("1");
  Promise.resolve().then(() => console.log("2"));
}).then((d) => console.log(d));

console.log("3");

//* output order :- 3 2 1
