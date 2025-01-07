// find the time taken by while loop

//* method 1
let i = 0;
console.log("before");
console.time("X");
while (i < 100000) {
  i++;
}
console.timeLog("X");
console.timeEnd("X"); // to end the timer
console.log("after");

//* method 2
let a = 0;
let beforeTime = new Date().getTime();
console.log("before");
while (a < 100000) {
  a++;
}
const afterTime = new Date().getTime();
let timeTaken = afterTime - beforeTime;
console.log("after", timeTaken);
