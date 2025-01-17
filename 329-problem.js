var x = 1;
let y = 1;

{
  var x = 2;
  let y = 2;
}

console.log(x, y); // [ 2, 1 ]
