function asyncTask() {
  return new Promise((resolve) => {
    resolve();
  });
}

const x = asyncTask()
  .then(() => console.log("first")) // 'first'
  .catch()
  .then(() => console.log("second")); // 'second'


//* Note:- if we have chain like this then,catch,then in this case if our promise gets resolved then our catch block gets ignored and both then block will work