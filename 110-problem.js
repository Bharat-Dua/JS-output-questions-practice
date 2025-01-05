const arr = ["ab", "cd", "ef"];
const str = "abcdef";

const strMatch = str.includes("a");
const arrMatch = arr.includes("a");

console.log(strMatch, arrMatch); // [ true false ]

//* bcoz str compare char by char but arr compare with element
