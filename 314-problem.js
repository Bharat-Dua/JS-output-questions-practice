var arr1 = [1, 2, 3];
var a2 = arr1.slice(); // making copy of arr1 and returns a new array and now they point to different
a2[0] = 0;
console.log(arr1); // [1,2,3]
