test();
againTest();

var test = function () {
  console.log("inside test");
}; // test is not a function bcoz not fully hoisted will work like variables

function againTest() {
  console.log("againtest test");
} // 'againtest test' bcoz fully hoisted will work like function declaration
