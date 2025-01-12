// find a bug
// here even when we pass marks value 0 we are getting 'marks absent instead of just 0
function showMessage(marks) {
  const message = marks || "Absent";
  console.log(`Marks ${message}`);
}

//* to resolve this we can use nullish collision(??) . it basically check if any value is null and undefined on left side then it will execute the right side.
function showMessage(marks) {
  const message = marks ?? "Absent";
  console.log(`Marks ${message}`);
}
showMessage(20); // `Marks 20'
showMessage(0); // 'Marks 0'
showMessage(46); // 'Marks 46'
