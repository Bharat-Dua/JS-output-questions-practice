//* these are two ways to declare multiple variables in single line
function a() {
  var var1 = 1,
    var2 = 1;
}

function b() {
  var var1 = (var2 = 1);
}

a(); // Reference error bcoz var1,var2 has only function scope
b(); // Reference error bcoz var1 has function scope and var2 is declared without variable declaration so it will go into global scope and print 1.
