// deeply comparison array

const a3 = [1, 2, 3, [4, 5]];
const a4 = [1, [2], 3, [4, 5]];

function compareArray(arr1, arr2) {
  if (!Array.isArray(arr1) && !Array.isArray(arr2)) {
    return false;
  }

  if (arr1.length !== arr2.length) {
    return false;
  }
  return arr1.every((value, idx) => {
    if (Array.isArray(value) && Array.isArray(arr2[idx])) {
      return compareArray(value, arr2[idx]);
    }
    return value === arr2[idx];
  });
}

console.log(compareArray(a3, a4));
