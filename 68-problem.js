const MESSAGE = 108;

function getInfo() {
  console.log(MESSAGE); // Reference error
  const MESSAGE = "dev";
}

getInfo();
