console.log("start");
setTimeout(() => {
  console.log("inside setimeout");
}, 0);

new Promise((resolve, reject) => {
  console.log("inside promise");
  resolve();
}).then(() => console.log("Promise resolved"));
console.log("end");

//* ouput order :- start,end,inside promise,promise resolved,inside setimeout
