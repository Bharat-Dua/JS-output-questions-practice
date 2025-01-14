// how here i am able to make changes in const variable
const Tech = { name: "JS" };
Tech.name = "React";
console.log(Tech.name); // 'React'

//* Note:- const prevent re-assignment

// but here we are just adding on reference not re-assigning the variable now to make it work like const we can use Object.freeze() method and as we know if we have nested object as prop then it will not work as expected bcoz object.freeze () can only freeze the top level object not the nested one to make it nested object freeze we can

//  deepfreeze () function
