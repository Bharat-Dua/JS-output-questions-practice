(async function () {
  const data = await 1; // here we are using await on non primitive value and when we use JS BTS consider it as resolved promise value and all the code after the await goes into microtask queue and run on the next cycle of event loop.
  console.log(data);
})();

console.log(2);

//* output order :- 2 1