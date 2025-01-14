new Test(); // ReferenceError:- Test is not defined bcoz let,const,classes are not hoist so we can't access them before their declaration;

function show() {
  console.log("Hello");
}

class Test {}
