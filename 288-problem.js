for (var index = 0; index < 3; index++) {
  setTimeout(() => {
    console.log(index); // 3 3 3
  }, 0);
}

for (let index = 0; index < 3; index++) {
  setTimeout(() => {
    console.log(index); // 0 1 2
  }, 0);
}
