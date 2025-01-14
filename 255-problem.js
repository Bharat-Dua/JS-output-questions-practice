console.log([] + {}); // '[object Object]'

console.log({} + []); // 0 bcoz here {} is treated as block scope and it will be discarded completely and [] is treated as a number and it will be converted to 0
