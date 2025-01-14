console.log(JSON.stringify("JS") === "JS"); // false
// console.log(JSON.stringify("JS")); // '"JS"'

//* After stringify , the string is wrapped in double quotes. So, we can't compare it with the original string using strict equality operator (===) because it will return false. But we can compare it with the original string using loose equality operator (==) because it will return true.

console.log(JSON.stringify(5)); // '5'
console.log(JSON.stringify({})); // '{}'
console.log(JSON.stringify([])); // '[]'
console.log(JSON.stringify(null)); // 'null'
console.log(JSON.stringify(undefined)); // undefined
