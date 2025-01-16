// some facts about NaN

1;
if (NaN) {
  console.log("success");
} else {
  console.log("fail"); // 'fail' bcoz NaN falsy value
}

2;
console.log(NaN == NaN); // false
console.log(NaN === NaN); // false

3;
console.log(Object.is(NaN, NaN)); // true
