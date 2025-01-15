async function getLion() {
  return "lion";
}

const lion = getLion();

console.log(lion === "lion"); // false bcoz async function returns promise and if we are explicity returning any value it treated as immediately resolved promise.

//* use top level await 

async function getLion() {
    return 'lion'
}

const lion = await getLion()
console.log(lion==='lion') // true
