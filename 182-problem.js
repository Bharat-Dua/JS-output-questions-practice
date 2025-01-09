// Convert num to positive number
// given 2 solution

let num = -9;

//* method 1
console.log(Math.abs(num)); // 9

//* method 2
if (num < 0) {
  num = num * -1;
}
console.log(num); // 9
