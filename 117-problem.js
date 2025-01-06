function SuperHero() {
  this.hero = "silversuffer";
  return { hero: "norenred" };
}
const hero = new SuperHero();

console.log(hero); // Outputs: { hero: "norenred" } because if a constructor function explicitly returns an object,
// that object is returned instead of the newly created instance (and 'this' context is ignored).

//* Note:- If a constructor function explicitly returns a non-primitive value (like an object), that value is returned instead of the instance created by new.

//* If a constructor function explicitly returns a primitive value (like a string, number, etc.), that return value is ignored, and the instance created by new is returned instead.

function SuperHero() {
  this.hero = "silversuffer";
  return 5;
}
const hero = new SuperHero();

console.log(hero); // Outputs: SuperHero { hero: "silversuffer" }
