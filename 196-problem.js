// Make sure sum function works with n number of arguments

//* method 1
function sum(...args) {
  return args.reduce((acc, cur) => {
    return acc + cur;
  }, 0);
}

console.log(sum(3, 4)); // 7
console.log(sum(3, 4, 1)); // 8
console.log(sum(3, 4, 5, 8)); // 20
console.log(sum(3, 4, 9, 8, 6)); // 30
console.log(sum(3, 4, 9, 8, 6, -1)); // 29

//* method 2
function sum() {
  let a = [...arguments];
  let add = 0;
  a.forEach((element) => {
    add += element;
  });
  return add;
}

console.log(sum(3, 4)); // 7
console.log(sum(3, 4, 1)); // 8
console.log(sum(3, 4, 5, 8)); // 20
console.log(sum(3, 4, 9, 8, 6)); // 30
console.log(sum(3, 4, 9, 8, 6, -1)); //29
