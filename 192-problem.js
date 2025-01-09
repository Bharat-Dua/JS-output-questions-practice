//* Check if a given character is in uppercase
// Give 2 solutions

//* method 1
function isUpperCase(char) {
  return char.toUpperCase === char;
}

//* method 2
function isUpperCase(char) {
  return char.charCodeAt(0) >= 65 && char.charCodeAt(0) <= 90;
}

//* method 3
function isUpperCase(char) {
  return char >= "A" && char <= "Z";
}
console.log(isUpperCase("a"));
console.log(isUpperCase("A"));
console.log(isUpperCase("Y"));
console.log(isUpperCase("a"));
