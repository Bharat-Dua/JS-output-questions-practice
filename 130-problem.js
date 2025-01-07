const getData = () => {
  console.log(this);
};

const obj = { user: 1 };

getData.call(obj); // {} bcoz arrow function doesn't have its own this context in its lexical scope so it inherit the this context of its parent scope and the binding of arrow function gets decide at compile time and it doesn't get changed at runtime.
