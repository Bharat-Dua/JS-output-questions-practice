//remove an duplicate from an array

let a = [1, 2, 1, 3, 4, 2, 2, 1, 5, 6];

function removeDuplicate(arr) {
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    if (result.indexOf(arr[i]) === -1) {
      result.push(arr[i]);
    }
  }
  return result;
}

console.log(removeDuplicate(a)); // [ 1, 2, 3, 4, 5, 6 ]
