function test() {
  for (var i = 0; i < 5; i++) {
    setTimeout(() => {
      console.log(i); // 5 5 5 5 5 bcoz var has function scope
    }, 100);
  }
}

test();

//* to prevent this

function test() {
  for (var i = 0; i < 5; i++) {
    setTimeout(() => {
      console.log(i); // 1 2 3 4 5 bcoz let has block scope
    }, 100);
  }
}

test();

//* IIFE
function test() {
  for (var i = 0; i < 5; i++) {
    (function (i) {
      setTimeout(() => {
        console.log(i); // 1 2 3 4 5 
      }, 100);
    })(i);
  }
}

test();
