const lang = { name: "ReactJS" };

function getLib(ver) {
  return `${this.name} version ${ver}`;
}

console.log(getLib.call(lang, 18)); // 'ReactJS version 18'
console.log(getLib.bind(lang, 18)); // returns a new function

//* Call and bind decides what will be the context of this,when function is called
//* Call() method immediately calls the function with the given context and params
//* bind() method returns a new function after changing the context,it doesn't call the function immediately 
