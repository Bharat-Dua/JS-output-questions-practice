function sum(a, b) {
  return a + b;
}
console.log(sum(10, "10")); // '1010' bcoz -> In JavaScript, the + operator is used for both addition and string concatenation. When you use the + operator with a number and a string, JavaScript performs type coercion, converting the number to a string and then concatenating the two strings together.

//* When you call sum(10, "10"), JavaScript sees that one of the operands is a string. As a result, it converts the number 10 to the string "10" and then concatenates the two strings:

//* "10" + "10" results in "1010" (a string).
