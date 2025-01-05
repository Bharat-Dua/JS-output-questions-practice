// make the changes in the code so that if we try to access them outside of the scope we should get an error without using let

function show() {
  {
    var x = 5;
    var y = 4;
  }
  console.log(x, y); // Reference error can't access
}

show();

// we can use IIFE

function show() {
  (function () {
    var x = 5;
    var y = 4;
  })();
  console.log(x, y);
}
show();
