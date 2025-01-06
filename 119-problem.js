function show() {
  console.log("0", arguments[0]); // ['0,21]
  console.log("len", arguments.length); // ['len',2]
  for (const x of arguments) {
    console.log("x", x); // ['x',0] ['x',21]
  }
}

console.log(Array.isArray(arguments)); // false bcoz it's a special object that share some similarity like array i.e. index,length,forOf loop etc. so then why it's not an array bcoz it can't inherit the prop from Array constructor like push,pop,shift,unshift,foreach,so on.. . so it's not an array but it's an array like object .

show(21, "JS");
