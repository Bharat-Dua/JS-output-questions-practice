//? Create a function add without using a function and arrow function

const a = 10;
const b = 20;

const add = new Function("a", "b", "console.log(a+b)");

add(10, 20); // 30
add(a, b); // 30

// new Function(no of arguments, function body)

/*
The Function constructor allows you to create functions dynamically by passing arguments and the function body as strings.

Parameters:

1. arg1, arg2, ..., argN (optional):
These are the names of the function's parameters.
They should be strings and are separated by commas.

2. functionBody:
A string that contains the JavaScript code that will be executed when the function is called.
This string defines the body of the function.

3. Return Value:
The new Function() constructor returns a new function object that can be invoked like any other function.

A Key Limitation of new Function()
The function created by new Function() does not have access to the enclosing lexical scope. This is a significant difference compared to other functions in JavaScript. Instead, it always operates in the global scope

const x = 10;
const dynamicFunc = new Function("return x;");
console.log(dynamicFunc()); // ReferenceError: x is not defined


*/
