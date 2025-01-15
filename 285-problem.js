// microtask queue
new Promise((resolve) => {
  resolve("first promise");

  Promise.resolve().then(() => {
    console.log("second promise");
  });
}).then((data) => {
  console.log(data);
});

//* output order :- 'second promise','first promise'
