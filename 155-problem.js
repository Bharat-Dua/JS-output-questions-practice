const obj = {
  data: [1, 2, 3],
  processData: function () {
    this.data.forEach((num) => {
      console.log(num * this.factor); // 3 6 9 bcoz here we are using arrow function and the context of this of arrow function gets inherit from its lexical scope and here its parent is process Data
    });
  },
  factor: 3,
};

obj.processData();
