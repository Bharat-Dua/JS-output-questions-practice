const obj = {};

const set1 = new Set();
const set2 = new Set();

set1.add(obj);
set1.add(obj);

set2.add({});
set2.add({});

console.log(set1.size); // 1 bcoz here obj is pointing to same ref.
console.log(set2.size); // 2 bcoz here two different objects are created.
