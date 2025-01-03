const myFunc = ({ x, y, z }) => {
  console.log(x, y, z); // [ undefined, undefined, undefined ] bcoz code is attempting to destructure an object with properties x, y, and z in the function myFunc. However, when calling myFunc, it is being passed three separate arguments (1, 2, and 3) instead of a single object.
};
myFunc(1, 2, 3);
