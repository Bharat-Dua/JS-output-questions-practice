function checkAge(data) {
  if (data === { age: 18 }) {
    console.log("you are an adult");
  } else if (data === { age: 18 }) {
    console.log("you are still an adult");
  } else {
    console.log("hmm..no age"); // 'hmm..no age' bcoz object are reference type
  }
}
checkAge({ age: 18 });
