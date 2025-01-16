var show = 1;
console.log(show); // 1
function show() {
  console.log("smile");
}

console.log(show); // 1

//* Bcoz when we have function and variable in the same scope js give functions high preference so it will get hoist first then variable will come and gets override by the show function.
