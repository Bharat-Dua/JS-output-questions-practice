// Call obj.show function without using parenthesis show 3 ways

//* 1. using getter
const obj = {
  get show() {
    console.log("JS"); // 'JS'
  },
};

obj.show;

//* 2. using tagged template literal
const obj = {
  show() {
    console.log("JS"); // 'JS'
  },
};

obj.show``;

//* 3. using new keyword
const obj = {
  show: function () {
    console.log("JS"); // 'JS'
  },
};

new obj.show();
