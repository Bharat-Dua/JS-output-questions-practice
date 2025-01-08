//* Throw error if user tries to set age with number less than 20

// show 2 ways

const obj = { age: 8 };
const newAge = 19;

//* 1
if (newAge < 20) {
  throw new Error("Age must be greater than 20");
} else {
  obj.age = newAge;
}

//* 2 set method
const obj1 = {
  age: 8,
  set age(newVal) {
    if (newVal < 20) {
      throw new Error("must be greater to 20");
    }
  },
};
