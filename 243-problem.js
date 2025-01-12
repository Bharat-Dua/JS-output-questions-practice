// As we know the length prop on function we use to collect the length of param , So what would happen if i use rest operator and give a default value to any param
function getData(a, b) {}

console.log(getData.length); // 2

function getData(a, b, ...c) {}

console.log(getData.length); // 2

function getData(a, b = 3, c) {}

console.log(getData.length); // 1

//* Note:- the rest operator doesn't comes in count param length and also if we give any param default value it just ignore that param and after all the element after that param also gets ignored.
