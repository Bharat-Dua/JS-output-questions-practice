const promise = new Promise((_, reject) => {
  reject();
});

const res = promise
  .then(() => {
    console.log("then");
  })
  .catch(() => {
    console.log("catch"); // catch
  })
  .then((data) => {
    console.log("then after catch"); // 'then after catch'
  });
