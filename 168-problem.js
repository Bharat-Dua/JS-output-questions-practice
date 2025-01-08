const obj = {
  result: 0,
  add: function (n1, n2) {
    this.result = n1 + n2;
    return this;
  },
  mul: function (num) {
    this.result = num + this.result;
    return this;
  },
  sub(num) {
    this.result = this.result - num;
  },
};

// instead of calling the function like this
// obj.add(2, 2);
// obj.mul(2);
// obj.sub(2);

// i want to call the function like this
//* Note :- whenever we wanna chain the function we need to return the object itself. just simply write the return this.
obj.add(2, 2).mul(2).sub(2);

console.log(obj.result);
