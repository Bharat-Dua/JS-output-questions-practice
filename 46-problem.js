async function getData() {
  return await Promise.resolve("👍");
}

const data = getData();
data.then((res) => console.log(res)); // {res:'👍'}
console.log(data); // Promise{ <pending>} to get the return value we need to catch the result
