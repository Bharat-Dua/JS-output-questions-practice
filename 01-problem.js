function showData() {
  console.log("variable name is ", name); // undefined due to hoisting
  console.log("variable name is ", age); // Reference error bcoz TDZ
  var name = "bharat dua";
  let age = 999;
}
showData();
