const data1 = ["C", "B", "A"];
const data2 = ["Z", "Y", "X"];

data1.toSorted(); //The toSorted() method in JavaScript is a recent addition that allows you to create a sorted copy of an array without modifying the original array.
data2.sort();

console.log({ data1 }); // { data1: [ 'C', 'B', 'A' ] }
console.log({ data2 }); // { data2: [ 'X', 'Y', 'Z' ] }
