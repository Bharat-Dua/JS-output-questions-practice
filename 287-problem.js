Promise.resolve(() => {
  return "resolve";
}).then((data) => {
  console.log(data);
});

//* output ;- resolve arrow function whole body

//* Note:- Bcoz whenever we create a promise using Promise function and immediately resolve it the passing value in resolve body is the value of then method.
