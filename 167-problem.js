function test(a, a) {
  console.log(a); // undefined bcoz here we are just passing single value and a=3,a=undefined so it will overrite it.
}

test(3);
