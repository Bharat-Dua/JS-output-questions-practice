// write polyfill for map

const arr = [1, 2, 3, 4, 5];

Array.prototype.myMap = function (callbackFn) {
  if (this == null) {
    throw new TypeError("Array.prototype.myMap called on null or undefined");
  }

  if (typeof callbackFn !== "function") {
    throw new TypeError(callbackFn + " is not a function");
  }

  let result = [];
  this.forEach(function (ele, idx, arr) {
    result.push(callbackFn(ele, idx, arr));
  });

  return result;
};

const newArray = arr.myMap(function (e, i) {
  return e * i;
});
console.log(newArray); // Output: [0, 2, 6, 12, 20]
