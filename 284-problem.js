const obj1 = { a: "JS" };

console.log(obj1 == "smile");

// make the above code true we can override the toString method of the object prototype

const obj1 = { a: "JS" };
obj1.toString = function () {
  return "smile";
};

console.log(obj1 == "smile"); // true
