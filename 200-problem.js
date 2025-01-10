const magicObject = {
  val: 1,
  get a() {
    return this.val++;
  },
}; // we can use getter

console.log(magicObject.a); // 1
console.log(magicObject.a); // 2
console.log(magicObject.a); // 3

// 1 2 3

//* We don't call getter function like we do with regular function
