let name = "Dev";

function getName() {
  console.log(name); // Reference error bcoz local scope gets more priority than outer scope is call variable shadowing.And here we are using let if there were var we get the undefined
  let name = "frontenddeveloper";
}

getName();
