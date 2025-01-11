let i = 0;
// if we run this code it'll go into infinite loop.

// function show() {
//   console.log(i++);
//   show();
// }

// to make it workable and keep the infinite loop
function show() {
  console.log(i++);
  setTimeout(() => {
    show();
  });
}
show();
