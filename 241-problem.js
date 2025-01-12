function showMessage(marks) {
  const message = marks || "Absent";
  console.log(`Marks ${message}`);
}

showMessage(20); // `Marks 20'
showMessage(0); // 'Marks Absent'
showMessage(46); // 'Marks 46'
