var magic = 100;
function magic() {
  console.log("magic");
}
console.log(magic); // 100 bcoz function dec has more priority and it will get overwrite

//* BTS js code

function magic() {
  console.log("magic");
}

var magic;
magic = 100;
console.log(magic);
