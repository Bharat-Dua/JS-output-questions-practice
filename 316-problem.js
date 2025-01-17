new Promise(() => {
  console.log("d");
});

console.log("s");

//* output order :- 'd','s'

/* 
Synchronous vs Asynchronous Code:

JavaScript executes synchronous code first, line by line, in the order it appears.
Asynchronous code (like setTimeout, Promise callbacks, etc.) is deferred until the current execution stack is cleared.
Promise Constructor Execution:

When you create a Promise with new Promise(), the executor function (the function passed to Promise, in this case () => console.log("d")) runs synchronously.
However, the resolution/rejection handlers (then, catch, finally) are asynchronous and added to the microtask queue.
*/
