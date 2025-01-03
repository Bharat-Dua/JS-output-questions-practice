const add = (x) => x + x;

function myFunc(num = 2, value = add(num)) {
  console.log(num, value); // [ 2, 4 ], [ 3, 6 ]
}

myFunc();
myFunc(3);
