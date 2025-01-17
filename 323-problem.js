let arr1 = [1, 2, [3, 4]];
let arr2 = [...arr1]; // creating shallow copy of arr1
arr2[1] = 10; // changing primitive value will not affect in arr1 bcoz they are pass by value
arr2[2][0] = 100; // changing nested array will affect in arr1 bcoz they are pass by reference

console.log(originalArray); // [1,2,[100,4]]
