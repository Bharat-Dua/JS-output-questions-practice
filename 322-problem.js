// how to protect object from modification
const data = {
  id: "1",
};

Object.freeze(data);

data.id = "2";

console.log(data.id); // '1'
