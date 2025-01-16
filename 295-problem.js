// module file

console.log(await "🍟"); // "🍟"

/*
if we are in module file and in global scope we don't need to use async keyword due to top level await and we can use that on any non-promise value. if we do that await BTS consider that it's resolving promise return value that's why :- 
await Promise.resolve('🍟')

*/
