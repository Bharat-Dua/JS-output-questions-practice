const arr = [1, 4, 5, [4, 5, [6, [3]]]];

// O/P - [1,4,5,4,5,6,3]
// Complete flat function
//* method 1

function flat(data) {
  let flarArr = [];
  if (Array.isArray(data)) {
    for (let i = 0; i < data.length; i++) {
      if (Array.isArray(data[i])) {
        flarArr = flarArr.concat(flat(data[i]));
      } else {
        flarArr.push(data[i]);
      }
    }
  } else {
    return "please enter array";
  }
  return flarArr;
}

console.log(flat(arr)); // Array(7) [ 1, 4, 5, 4, 5, 6, 3 ]

//* method 2

function flat(data) {
  let result = [];
  if (Array.isArray(data)) {
    data.forEach((ele) => result.push(...flat(ele)));
  } else {
    result.push(data);
  }
  return result;
}
flat(arr); // Array(7) [ 1, 4, 5, 4, 5, 6, 3 ]

//* method 3
function flat(data, flarArr = []) {
  if (Array.isArray(data)) {
    for (let i = 0; i < data.length; i++) {
      if (Array.isArray(data[i])) {
        flat(data[i], flarArr);
      } else {
        flarArr.push(data[i]);
      }
    }
  } else {
    return "please enter array";
  }

  return flarArr;
}

console.log(flat(arr)); // Output: [1, 4, 5, 4, 5, 6, 3]
