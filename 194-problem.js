// define the purpose to passing an argument to function

// e.g. show(true) here we are just randomly passing the value without telling why we are passing it and its purpose to know its purpose we need to check its function declaration

//* to tell the purpose of passing the value we can follow the below best practices

//* 1. use a variable instead of hard code value

const ADD_PREFIX = true;

show(ADD_PREFIX);

function show(ADD_PREFIX) {}

//* 2. Add an comment

show(true /* describe its purpose here*/);

function show(ADD_PREFIX) {}

//* 3. use an object instead of sending single single value

show({ addPrefix: true });

function show({ addPrefix = false }) {
  if (addPrefix) {
    console.log("Adding prefix...");
  } else {
    console.log("No prefix added.");
  }
}
