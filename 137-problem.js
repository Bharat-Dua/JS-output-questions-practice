const arr = [
  { id: 23, name: "B" },
  { id: 32, name: "C" },
  { id: 43, name: "A" },
];

// find object with id 32

// find

let resultData = arr.find(checker);

function checker(data) {
  return data.id === 32;
}
console.log(resultData); // { id: 32, name: 'C' }

//* Note:- Always give the default value when using find method

let resultData1 = arr.find(checker);

function checker(data) {
  return false;
}
console.log(resultData1); // undefined

//* if you accidently try to access the result variable with some value it will throw an error that can break your application. to prevent this always give a default value mostly can give {} object

let resultData2 = arr.find(checker) || {};

function checker(data) {
  return false;
}
console.log(resultData2.value); // TypeError: Cannot read properties of undefined (reading 'value')
