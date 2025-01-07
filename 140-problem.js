function show() {
  console.log("wow");
}

const functionName = "show";

// show() is allowed

//* call the show function dynamically

window[functionName](); // 'wow'
