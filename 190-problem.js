//* Repeat given string n times input string

/*
input:"JS"
Repeat count 5
output : 'JSJSJSJSJS'

Give 2 possible solution
*/

//* method 1

const input = "js";
console.log(input.repeat(5)); // 'jsjsjsjsjs'

//* method 2

console.log(Array(5).fill("JS").join("")); //'JSJSJSJSJS'
