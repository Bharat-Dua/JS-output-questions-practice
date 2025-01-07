// break the foreach loop as we met condition
const arr = [1, 2, 3, 4];

arr.forEach((val) => {
  if (val == 2) {
  }
  console.log("value = ", val);
});

// we can't use break,return in foreach

//* method 1
arr.forEach((val) => {
  if (val == 2) {
    throw new Error("met condition");
  }
  console.log("value = ", val);
});

//* method 2
arr.forEach((val) => {
  if (val == 2) {
    arr.length = 0;
  }
  console.log("value = ", val);
});

//* method 3
arr.forEach((val, index) => {
  if (val == 2) {
    arr.splice(index + 1, arr.length);
  }
  console.log("value = ", val);
});
