// WAP to capitalize the first char of word

// input :- javascript
// output :- JavaScript

function capitalizeFirstChar(str) {
  //* method 1
  const [firstChar, ...rest] = str;
  return firstChar.toUpperCase() + rest.join("");

  //* method 2
  return str[0].toUpperCase() + str.slice(1);

  //* method 3
  const arrayStr = str.split("");
  return arrayStr[0].toUpperCase() + arrayStr.slice(1).join("");
}

console.log(capitalizeFirstChar("javascript")); // 'Javascript'
