function show() {
  this.name = "Vivekanand";
  return { name: "Mahatma Gandhi Ji" };
}

const superhero = new show();

console.log(superhero.name); // {name:'Vivekanana'}

//* If we explicity return the object from the constructor it will get more preference than return prop from constructor function.
