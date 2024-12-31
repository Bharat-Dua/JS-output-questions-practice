class Lizard {
  constructor({ newColor = "orange" } = {}) {
    this.newColor = newColor;
  }
  static colorChange(newColor) {
    this.newColor = newColor;
    return this.newColor;
  }
}
const tommy = new Lizard({ newColor: "orange" });
console.log(tommy.colorChange("blue")); // output:- error bcoz here i am trying to access the static method and as we know static methods are not bound to the instance of the class and hence we can't access them using th s keyword but we can access them inside the class and on the class

//* working code
console.log(Lizard.colorChange("blue"));
