function x() {
  a();
  function a() {
    console.log("a");
  }
  a();
  function a() {
    console.log("b"); // 'b' 'b' 'b'
  }
  a();
}
x();

/* 
Function Hoisting:

All function declarations are hoisted to the top of their scope.
When multiple functions are declared with the same name, the last one declared takes precedence.
Execution Flow:

When a() is called, it always refers to the most recent declaration of a because the previous declarations are overridden.*/
