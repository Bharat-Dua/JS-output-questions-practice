function task() {
  return new Promise((resolve) => resolve("data"));
}

const result = task().then();
console.log(result); // Promise { <pending> } bcoz the task function returns a Promise that resolves to the string "data". When you call task().then();, it initiates the Promise but doesn't provide a callback to handle the resolved value. As a result, result becomes a Promise object, not the resolved value. When you pass this Promise to console.log(result);, it outputs Promise { <pending> }, indicating that the Promise is pending and its value hasn't been accessed.

/* if
no explicit return in then() 

then 

then() returns a promise which get resolves immediately.
*/
