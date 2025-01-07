//* how to make passing argument manadatory?

// we can use the default parameter concept if we don't pass the argument it will take the default value


function check() {
  throw new Error("param required");
}
function show(name = check()) {
  // name is required
  console.log(name);
}
show();
