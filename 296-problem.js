function fetchData() {}

console.log(fetchData()); // undefined

//* if we call a function without returning anything we get undefined

async function fetchData() {}

console.log(fetchData()); // Promise {<fulfilled>: undefined}
// if we don't return anything so all the async function will consider resolved.

async function fetchData() {
  return 1;
}

console.log(fetchData()); // Promise {<fulfilled>:1}
console.log(await fetchData()); // 1
