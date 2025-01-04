let lifeSpan={
    99:'Impressive'
}

lifeSpan.100='🚀';

console.log({ lifeSpan }); // bcoz objects can only have string,symbol as keys not numbers.

//* to fix this

let life = { 99: "Impressive" };
let key = 100;
life[key] = "🚀";
console.log(life);

let obj = { 99: "Impressive" };
obj[100] = "🚀";
console.log(obj);
