let a = "81";

switch (a) {
  case 81:
    console.log("==");
    break;
  case "81":
    console.log("==="); // '==='
  default:
    console.log(":)");
    break;
}

//* Note :- Switch statement uses strict equality operator (===) for comparison. So, it will not work with loose equality operator (==). */
