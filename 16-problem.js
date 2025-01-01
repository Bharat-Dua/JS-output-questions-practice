function getSummary(one, two, three) {
  console.log(one); // [ '', ' age is ', '', raw: [ '', ' age is ', '' ] ]
  console.log(two); // "Bharat"
  console.log(three); // 878
}

const fName = "Bharat";
const age = 878;

getSummary`${fName} age is ${age}`; //* this concept is called tagged temperal literal and this is how we call him without giving space and the way it returns the result is first argument is always be array which contains the string part of input and the rest argument will print the variable data.
