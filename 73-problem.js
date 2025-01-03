const groceries = ["🍓", "🍎"];

if (groceries.indexOf("🍓")) {
  console.log("we have 🍓!");
} else {
  console.log("we do not have 🍓!"); // 'we do not have 🍓!' bcoz indexOf('🍓') is 0 and 0 is a falsy value
}
