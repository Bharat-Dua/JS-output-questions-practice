let a = { greeting: "Hi" };
let z = a;
z.greeting = "Bye";
console.log(a.greeting); // "Bye" bcoz z is a reference to a
