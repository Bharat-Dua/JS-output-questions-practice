// optional chaining on array

// if we run this code we will get an error
function transform(arr) {
  console.log(arr[99]); // Cannot read properties of undefined (reading '99')
}

transform();

// we can solve this problem by using optional chaining

function transform(arr) {
  console.log(arr?.[99]);
}

transform();
