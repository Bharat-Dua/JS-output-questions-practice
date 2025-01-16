function Animal() {
  this.eat = "milk";
}

function Bird() {
  Animal.call(this);
}
Bird.prototype = Object.create(Animal.prototype);
const bird = new Bird();
console.log(bird.eat); // make it log forest

// we can use call to point to animal
