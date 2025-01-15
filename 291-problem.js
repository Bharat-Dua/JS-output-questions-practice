const arr = [0, 1, 2, 3, 4, 5, 6];

arr.forEach((element) => {
  console.log(element); // 0 1 2 3 4 5 6
  if (element === 3) {
    return;
  }
});

// tell the different ways to break the foreach loop
arr.forEach((element) => {
  console.log(element); // 0 1 2 3 4 5 6
  if (element === 3) {
    throw "error";
  }
});
