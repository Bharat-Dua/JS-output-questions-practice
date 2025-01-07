console.log(1);
new Promise((resolve, reject) => {
  console.log(2);
});
console.log(3);

//* output order :- 1 2 3
