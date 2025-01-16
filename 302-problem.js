function Variant1(emoji) {
  this.emoji = emoji;
}

function Variant2(emoji) {
  this.emoji = emoji;
  return emoji; // when we are explicity returning non-primitive value the priority goes to object return not our returning value.
}

function Variant3(emoji) {
  this.emoji = emoji;
  return { emoji: "💥" };
}

console.log(new Variant1("🍟")); // Variant1 { emoji: '🍟' }
console.log(new Variant2("🍟")); // Variant2 { emoji: '🍟' }
console.log(new Variant3("🍟")); // { emoji: '💥' }
