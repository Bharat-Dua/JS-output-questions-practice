let a = 10;
let b = 20;

let c = 30 - (a = b + 10);

console.log(`c=${c}`); // 'c=0' bcoz () grouping has more precedence so Right to left   
