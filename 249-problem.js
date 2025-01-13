var x = [typeof x, typeof y][1];
/*
// let's break down code
var x = ["undefined", "undefined"][1]; // bcoz undeclare variable are undefined
// now we are trying to access 1 index value

var x = "undefined";
console.log(typeof "string"); // = 'string'
*/
console.log(typeof typeof x); // 'string'

//* if we use let we will get error bcoz let,const can't access before initialize
