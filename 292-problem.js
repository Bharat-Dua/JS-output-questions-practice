let sum = function add() {
  console.log(typeof add); // 'function'
  add = "JS";
  console.log(typeof add); // 'function'
};

sum();

/*
Key Points to Note
Named Function Expressions (NFE):

In the above code, sum is assigned to a function expression with the name add.
A named function expression creates a function with a name that is only accessible inside the function itself. Outside the function, the name add is not defined.
add in the Function Scope:

Inside the function, add is treated as a constant binding. This means you can reference it, but you cannot reassign it.
Reassigning add = "JS" results in a silent error in non-strict mode (the reassignment is ignored), and add remains the original function.
*/
