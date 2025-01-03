const emoji = ["🍔", "🍟"];

/* this syntax destructuring
({ item: emoji[2] } = { item: "🥨" });
is equal to 
const temp= { item: "🥨" }
emoji[2]= temp.item;
 */

({ item: emoji[2] } = { item: "🥨" });

console.log(emoji); // [ '🍔', '🍟', '🥨' ]
