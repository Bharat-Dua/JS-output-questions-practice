function getInfo(member, year) {
  member.name = "Frontend";
  year = "1947";
}

const person = { name: "Dev" };
const birthYear = "2007";

getInfo(person, birthYear);
console.log(person, birthYear); // [ { name: 'Frontend' }, '2007' ]
