// find the bug

function sum(nums) {
  var result = 0;
  for (let i = 0; i <= nums.length; i++) {
    console.log(i);

    result += nums[i];
  }
  return result;
}

var numbers = [1, 2, 3, 4, 5];

console.log("result", sum(numbers));

//* here we are looping till the num the length and we know array are 0 based index so when we try to loop over the given length we get undefined and undefined + number = NaN

function sum(nums) {
  var result = 0;
  for (let i = 0; i <= nums.length - 1; i++) {
    console.log(i);

    result += nums[i];
  }
  return result;
}

var numbers = [1, 2, 3, 4, 5];

console.log("result", sum(numbers)); // ['result',15]
