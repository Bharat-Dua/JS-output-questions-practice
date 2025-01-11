localStorage.setItem("pass", false);

const isPass = localStorage.getItem("pass");
console.log(isPass); // 'false'

// to get the desired result we need to make a condition
if (isPass !== "false") {
  console.log("You cleared"); // 'you cleared'
} else {
  console.log("Better luck next time"); // now this will print
}

//* Note:- when we save anything in LS it will be saved in string format. So when we retrieve it, it will be in string format.
