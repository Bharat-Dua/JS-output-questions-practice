// If Person function is called without new keyword then throw error
// 1. use 'use strict'
// 2. define if block to check if new keyword is pointing to Person function
"use strict";
function Person(name) {
  this.name = name;
}
Person();
console.log("works");

//* 2.
function Person(name) {
  if (new.target) {
    this.name = name;
  } else {
    throw new Error("no new keyword");
  }
}
Person();
console.log("works");
