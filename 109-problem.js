const magicObject = {
  flag: 1,
  get value() {
    return this.flag++;
  },
};

if (
  magicObject.value === 1 &&
  magicObject.value === 2 &&
  magicObject.value === 3
) {
  console.log("i love JS");
}

//  we will use here getter and setter basically it comes in every object and it is used to get and set the value of the object and if we have method in object we call them like a key not like a function
