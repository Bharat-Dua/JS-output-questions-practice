function Hero() {
  this.make = "Bhagat Singh";
  return { make: "Vivekanand" };
}

const myHero = new Hero();
console.log(myHero.make); // Output: Vivekanand bcoz as we know when we use new keyword it creates a brand new object instance of the class if we are returning from that object then the return value gets more preference rather that this keyword property defined in the object.
