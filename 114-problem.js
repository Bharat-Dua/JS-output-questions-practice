//? if the score value is <`10 add 0 front of the score otherwise print score

//* 1. traditional way using if
let score = 2;
let message;

if (score < 10) {
  message = `Your score is 0${score}`;
} else {
  message = `Your score is ${score}`;
}

console.log(message);

//* using padStart()/padEnd() string method
message = String(score).padStart(2, 0);
console.log(message); // '03'
