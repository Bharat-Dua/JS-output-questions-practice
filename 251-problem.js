let obj = { lang: "React" };

const lib = {};
lib.name = obj;

obj = null;

console.log(lib.name); //{ lang: 'React' } bcoz here we are passing the reference of obj to name but later on we are setting the obj as null,but still name will hold the reference of obj
