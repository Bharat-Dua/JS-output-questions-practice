function test() {
  console.log(typeof this);
}

test.call(""); // 'object'

//* Note: if we pass primitive value in call(like number, string, etc.) as this, it will be converted to object .
