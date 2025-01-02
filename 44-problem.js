const name = "Mr.X";
age = 20;

console.log(delete name); // false bcoz let,const have block scope and don't get added in global object and are non-configurable and delete operator can't delete them
console.log(delete age); // true bcoz undeclare and implicit gets added in global object
