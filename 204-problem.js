const bird = { name: "🦅" };
const animal = { name: "🦍" };

function show() {
  console.log(this.name);
}

const objShow = show.bind(bird);
objShow.call(animal); // Output: 🦅

//* Note:- bcoz with bind we are binding the context of this and once we bind the context we can't change it. so we can't change the context of this in objShow function. so it will always print 🦅