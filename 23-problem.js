for (let i = 0; i < 5; i++) {
  if (i === 3) continue;
  console.log(i); // 0, 1, 2, 4 bcoz 3 is skipped due to continue
}
