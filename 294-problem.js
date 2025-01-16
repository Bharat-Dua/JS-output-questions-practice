// review the below code and remove the unnecessary code
function init() {
  let channel = "YT";
  function greet(name) {
    console.log(`hey ${name}`);
    console.log(`from ${channel}`);
  }

  setTimeout(() => {
    greet("frontend");
  }, 1000);
}
init();

// 1. instead of using arrow function we can directly pass the function to settimeout and pass the para as third argument
//2. instead of making a closure of channel variable to keep the reference of whole greet function we can pass to setimeout

function init() {
  function greet(name) {
    console.log(`hey ${name}`); // 'hey frontend'
    console.log(`from ${channel}`); // 'from YT'
  }

  setTimeout(greet, 1000, "frontend", "YT");
}
init();
