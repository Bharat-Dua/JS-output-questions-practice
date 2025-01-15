var finalScore = 1 + score; // ReferenceError: score is not defined
score = 88;
console.log(finalScore);

var finalScore = 1 + score;
var score = 5;
console.log(finalScore); // NaN

var score = 44;
var finalScore = 1 + score;
console.log(finalScore); // 45
