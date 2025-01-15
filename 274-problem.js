var length = 20;

function count() {
  console.log(this.length);
}

const data = [count, "A", 0];

data[0]("Hey"); // 3 bcoz here we are calling on data array and value of this is pointing to data array.
