function* generatorFn(i) {
  console.log("A");
  yield i;
  console.log("B");
  yield i * 2;
}

const gen = generatorFn(10);

console.log(gen.next().value); // prints "A" and 10
console.log(gen.next().value); // prints "B" and 20

//* generator function : we can stop execution at any time using yield keyword and resume using next() method
