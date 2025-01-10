/* Create a variable whose name is inside a variable. assign 'JS' to it.  */

// e.g. here i wanna create a variable with name lang but i have assign it into another variable

var varName = "lang";
//* method 1 setting variable as a key in window object
window[varName] = "JS";
