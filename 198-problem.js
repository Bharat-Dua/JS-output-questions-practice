const arr = new Array(28);

console.log(arr.length); // 28

arr.forEach((element) => console.log(element)); // {} to work foreach to have an index on array is must

//* Note :-
/*
You can use array methods like map(), filter(), and forEach() on both new Array(28) and Array(10), but they will behave differently due to the sparse nature of these arrays (i.e., they have empty slots).

const arr = new Array(28);
console.log(arr.map(x => x)); // []

const a = Array(10);
console.log(a.map(x => x)); // []

You can use forEach() on these sparse arrays, but keep in mind that forEach() will skip over empty slots:
*/
