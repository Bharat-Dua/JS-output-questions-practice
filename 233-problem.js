const str = "Hey JS! You R AMAZING";
const vowels = ["a", "e", "i", "o", "u"];

//* method 1
function countVowel(str) {
  let count = 0;
  str
    .toLowerCase()
    .split("")
    .forEach((ch) => {
      vowels.includes(ch) && count++;
    });
  return count;
}

//* method 2
function countVowel(str) {
  let lowecaseStr = str.toLowerCase().split("");
  let count = 0;
  for (let i = 0; i < lowecaseStr.length; i++) {
    if (vowels.includes(lowecaseStr[i])) {
      count++;
    }
  }
  return count;
}
//* method 3

function countVowel(str) {
  let lowecaseStr = str.toLowerCase().split("");
  let output = lowecaseStr.filter((str) => vowels.includes(str));
  return output.length;
}
const noOfVowels = countVowel(str);
console.log(noOfVowels); // 6
