const array = [{ key: 3 }, "2", "X"];

delete array[0];

console.log(array.length, array); // [ 3, [ undefined, '2', 'X' ] ]
