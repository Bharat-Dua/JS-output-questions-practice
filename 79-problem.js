console.log(1);

new Promise((resolve) => console.log(2));

console.log(3);

/* order of execution

1
2
3

*/