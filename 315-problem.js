const box = {
  x: 5,
  y: 10,
};

Object.freeze(box);
box.x = 7;

console.log(box); // { x: 5, y: 10 }
