const arr = [{}, "2", "Hello"];
delete arr[1];
// [ {}, undefined, 'Hello' ]
console.log(arr.length); // 3

//* Note:- Bcoz delete keyword after deleting the element it just mark that index with empty/undefined but doesn't effect the length of the array.
