function sum(nums) {
  var result = 0;

  for (var i = 0; i <= nums.length; i++) {
    result += nums[i];
  }
  return result;
}

var numbers = [1, 2, 3, 4, 5];
console.log(`Result : ${sum(numbers)}`); // 'Result : NaN' bcoz array are 0 index based and here we are iterating from 0 to nums.length which is 5 so it will be out of bound and return NaN and if we add or do any operation with undefined it will always return NaN.
