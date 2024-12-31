for (var i = 0; i < 4; i++) {
  setTimeout(() => {
    console.log(i); // 4 4 4 4 bcoz of var has global scope/function scope
  }, 5);
}

for (let i = 0; i < 5; i++) {
  setTimeout(() => {
    console.log(i); // 0 1 2 3 4 bcoz of let has block scope
  }, 5);
}
