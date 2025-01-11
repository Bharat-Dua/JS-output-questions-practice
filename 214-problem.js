// if i run this code we are gonna get the same value bcoz sort mutate the original array we can use destructuring to make copy of original but now there is a method toSorted that will not mutate the original array
const arr = ["🍉", "🍊", "🍋", ",🍌", "🥭"];
const sortedArray = getSorted(arr);

function getSorted(data) {
  return data.toSorted();
}

console.log("sorted", sortedArray); // [ 'sorted', [ ',🍌', '🍉', '🍊', '🍋', '🥭' ] ]
console.log("before", arr); // [ 'before', [ '🍉', '🍊', '🍋', ',🍌', '🥭' ] ]
