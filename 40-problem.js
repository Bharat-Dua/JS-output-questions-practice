const obj = { a: "Mr.X", b: 21 };
const dat = { c: true, ...obj };

console.log(dat); // { c: true, a: 'Mr.X', b: 21 } bcoz here we are doing the shallow copy and shallow copy creates a brand new object and copies the values from the original object to the new object. If the original object contains any same prop so it will gets overwrite
