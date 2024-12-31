const income = {
  skills: 100,
  monthly() {
    return this.skills * 100;
  },
  yearly: () => 888 * this.skills,
};
console.log(income.monthly()); // 10000
console.log(income.yearly()); // NaN bcoz arrow function does not have its own this context and try to inherit from its parent but here parent is global object and global object does not have skills property so it returns undefined and 888 * undefined -> NaN
