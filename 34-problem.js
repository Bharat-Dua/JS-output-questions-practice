function getMessage() {
  throw "Hello world!";
}

function sayHello() {
  try {
    const data = getMessage();
    console.log("worked!", data);
  } catch (e) {
    console.log("an error:", e); // "an error: Hello world!"
  }
}
sayHello();
