[1, 2, 3].map((num) => {
  if (num > 0) return; // [undefined,undefined,undefined]

  return num * 2;
});
