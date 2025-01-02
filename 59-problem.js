let randomValue = { name: "Lydia" };
randomValue = 22;

// if (false -> !'number')
if (!typeof (randomValue === "string")) {
  console.log("It is not a string!");
} else {
  console.log("It is a string"); // 'It is a string'
}
