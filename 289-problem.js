const P1 = new Promise((resolve) => {
  resolve("done");
});

P1.then(() => {
  return 10;
})
  .catch()
  .then((data) => console.log(data)); // 10
