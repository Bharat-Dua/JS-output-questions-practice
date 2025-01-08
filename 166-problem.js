function getFruit(input) {
  switch (input) {
    case "🍉": {
      const color = "orange";
      console.log(color);
      break;
    }
    case "🍋": {
      const color = "lemon";
      console.log(color); // 'lemon'
      break;
    }

    default:
      console.log("no color");
      break;
  }
}
getFruit("🍈");

//* Note :- Can't declare same two variable declared with const in the same scope if we use var the last one will gets override with the last one. so if we add the block around them they will work differently. */
