const fruit = ["🍌", "🍉", "🥝"];

fruit.slice(0, 1); // It deletes the element but doesn't mutate the array
fruit.splice(0, 1); // It deletes the element and mutates the array
fruit.unshift("🍉"); // It adds an element at the beginning of the array and mutates the array

console.log(fruit); // Output: ["🍉", "🍉", "🥝"]
