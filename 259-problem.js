// how to find out the execution time of a function

function calc() {
  let i = 0;
  while (i < 2000000) {
    i++;
  }
}

//* method 1
const before = new Date().getTime();
calc();
const after = new Date().getTime();
const timeTaken = after - before;
console.log(timeTaken);

//* method 2
console.time("timer");
calc();
console.timeLog("timer");

//* method 3
const start = performance.now();
calc();
const end = performance.end();
console.log(`Time taken: ${(end - start).toFixed(2)} ms`);

//* method 4
console.time("Execution Time");
calc();
console.timeEnd("Execution Time");
// Output: Execution Time: X ms
