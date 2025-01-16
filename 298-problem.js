function Animal() {}
Animal.prototype.home = () => {
  console.log("forest");
};

function Bird() {}

const bird = new Bird();
bird.home(); // make it log forest

// we need to inherit from animal prototype

function Animal() {}
Animal.prototype.home = () => {
  console.log("forest"); // 'forest'
};

function Bird() {}
Bird.prototype = Object.create(Animal.prototype);

const bird = new Bird();
bird.home(); // make it log forest
