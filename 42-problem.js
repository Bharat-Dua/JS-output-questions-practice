const box = { x: 10, y: 20 };

Object.freeze(box);

const shape = box;
shape.x = 100;
shape.y = 20;

console.log(shape); // { x: 10, y: 20 } bcoz of Object.freeze() it is not changed
