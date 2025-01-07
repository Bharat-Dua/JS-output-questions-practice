const str = "hare krishna hare krishna hare hare";

let resultObj = {};

for (const x of str) {
  if (x !== " ") {
    if (resultObj[x]) {
      resultObj[x]++;
    } else {
      resultObj[x] = 1;
    }
  }
}

console.log(resultObj); // { h: 6, a: 6, r: 6, e: 4, k: 2, i: 2, s: 2, n: 2 }
