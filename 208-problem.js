// Make sure no one can modify this object

const obj = { name: "JS", engine: { chrome: "v8" } };
Object.freeze(obj);
obj.name = "React";

//* for deep freeze

function deepFreeze(obj) {
  Object.freeze(obj);
  Object.keys(obj).forEach((key) => {
    if (typeof obj[key] === "object" && obj[key] !== null) {
      deepFreeze(obj[key]);
    }
  });
}

deepFreeze(obj);
obj.engine.chrome = "spider";
console.log(obj); // { name: 'JS', engine: { chrome: 'v8' } }
