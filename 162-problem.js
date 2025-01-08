const arr = [1, 2];

arr.reduce(function (acc, next) {
  console.log(acc); // 1
  console.log(next); // 2
});

//* Bcoz if we don't pass the initial value js will take first element of the array as initial value.
