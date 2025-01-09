// Complete the function shuffle the array.
// It should return any value everytime.

//* get random value of array
function getRandomValueOfArray(data) {
  let index = Math.floor(Math.random() * data.length);
  return data[index];
}

const array = [1, 2, 3, 4, 5, 6, 7];
const a1 = getRandomValueOfArray(array);
const a2 = getRandomValueOfArray(array);
const a3 = getRandomValueOfArray(array);
const a4 = getRandomValueOfArray(array);

console.log(a1, a2, a3, a4);

//* Method 1

function shuffleTheArray(data) {
  // fisher-yates algorithm
  for (let i = data.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [data[i], data[j]] = [data[j], data[i]];
  }
  return data;
}

const arr = [1, 2, 3, 4, 5, 6, 7];
const shuffleArray = shuffleTheArray(arr);
console.log(shuffleArray);

//* Method 2
const arr1 = [1, 2, 3, 4, 5, 6, 7];
arr1.sort(() => Math.random() - 0.5);
console.log(arr1); // Array(7) [ 7, 3, 5, 1, 4, 6, 2 ]
