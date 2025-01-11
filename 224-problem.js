const name = "JS";
function show(a, b) {
  console.log("a=", a); // [ 'a=',[ 'hey ', ', Welcome' ] ] 
  console.log("b=", b); // [ 'b=', 'JS' ]
}

show`hey ${name}, Welcome`;

//* this concept is tagged template literal