const Person = {
  lang: "JS",
  show: function () {
    console.log(`Hi, ${this.lang}`); // "Hi, undefined"
  },
};
let fn = Person.show;

fn(); // bcoz we are looking for show function in window scope

//* to make it work use call

const Person = {
  lang: "JS",
  show: function () {
    console.log(`Hi, ${this.lang}`); // 'Hi, JS'
  },
};
let fn = Person.show;

fn.call(Person);

//* bind

const Person = {
  lang: "JS",
  show: function () {
    console.log(`Hi, ${this.lang}`);
  },
};
let fn = Person.show;

let a = fn.bind(Person);
a(); // Hi, JS
