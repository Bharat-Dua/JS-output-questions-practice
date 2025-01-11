//* Write polyfill foreach for object to loop over them

const obj = { name: "JS", lib: "react" };

Object.prototype.forEach = function (cb) {
  Object.keys(this).forEach((key) => {
    return cb(key, this[key]);
  });
};

obj.forEach((key, value) => {
  console.log(key, value); // [ 'name', 'JS' ] [ 'lib', 'react' ]
});
