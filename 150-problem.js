// how to trace a function call stack
// here we were able to add console easily but in large projects it's not easy to do that for that
//* to do that we can use console.track() method

function grandGrandParent() {
//   console.log("grandGrandParent");
  grandParent();
}

function grandParent() {
//   console.log("grandParent");

  parent();
}

function parent() {
//   console.log("parent");

  child();
}

function child() {
//   console.log("child");

  innerChild();
}

function innerChild() {
//   console.log("innerChild");
console.trace()
}

grandGrandParent();
/* Output: -
Trace
    at innerChild (<anonymous>:19:11)
    at child (<anonymous>:14:3)
    at parent (<anonymous>:9:3)
    at grandParent (<anonymous>:4:3)
    at grandGrandParent (<anonymous>:1:3)
    at <anonymous>:23:1
*/