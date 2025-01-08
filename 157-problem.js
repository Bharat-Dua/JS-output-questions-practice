function test() {
  try {
    return 1;
  } finally {
    return 2;
  }
}
const result = test();
console.log(result); // 2 bcoz we can't return from try,finally both and finally has more priority than try.
