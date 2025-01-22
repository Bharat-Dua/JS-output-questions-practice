// return the non-duplicate integer
// using two-pass approach

const input = [4, 5, 6, 6, 6, 3, 3, 5];

// ouput : 4

function nonRepeatingInteger(num) {
  let occurenceOfEachInteger = {};
  for (let i = 0; i < num.length; i++) {
    if (occurenceOfEachInteger[num[i]]) {
      occurenceOfEachInteger[num[i]]++;
    } else {
      occurenceOfEachInteger[num[i]] = 1;
    }
  }
  for (let i = 0; i < num.length; i++) {
    if (occurenceOfEachInteger[num[i]] == 1) {
      return num[i];
    }
  }
  return -1;
  console.log(occurenceOfEachInteger);
}

console.log(nonRepeatingInteger(input)); // 4
