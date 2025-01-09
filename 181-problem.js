// print A-Z all alphabets

for (let i = 65; i < 91; i++) {
  console.log(String.fromCharCode(i));
  // output :-
  ("A");
  ("B");
  ("C");
  ("D");
  ("E");
  ("F");
  ("G");
  ("H");
  ("I");
  ("J");
  ("K");
  ("L");
  ("M");
  ("N");
  ("O");
  ("P");
  ("Q");
  ("R");
  ("S");
  ("T");
  ("U");
  ("V");
  ("W");
  ("X");
  ("Y");
  ("Z");
}

// print a-z
for (let i = 97; i < 123; i++) {
  console.log(String.fromCharCode(i));
}

// outpt :- 'a'
("b");
("c");
("d");
("e");
("f");
("g");
("h");
("i");
("j");
("k");
("l");
("m");
("n");
("o");
("p");
("q");
("r");
("s");
("t");
("u");
("v");
("w");
("x");
("y");
("z");

//* method 2
// A-Z
let arr = [...new Array(26)];
let start = 65;

arr.forEach((_, i) => {
  console.log(String.fromCharCode(start + i));
});

// a-z
let arr = [...new Array(26)];
let start = 97;

arr.forEach((_, i) => {
  console.log(String.fromCharCode(start + i));
});

//* method 3
// A-Z
let arr = Array.from({ length: 26 });
let start = 65;

arr.forEach((_, i) => {
  console.log(String.fromCharCode(start++));
});

// a-z
let arr = Array.from({ length: 26 });
// let start = 97;

arr.forEach((_, i) => {
  console.log(String.fromCharCode(start++));
});
