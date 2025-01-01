let person = { role: "Dev" };
const members = [person];
person = null;
console.log(members); // Output: [ { role: 'Dev' } ]
