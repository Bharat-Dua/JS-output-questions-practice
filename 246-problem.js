// throw an error if we try to access the function out of the scope

"use strict";

{
  function show() {
    console.log("Inside Show"); // 'Inside Show'
  }
}
show(); // we can enable use strict mode to force browser it has block scope
