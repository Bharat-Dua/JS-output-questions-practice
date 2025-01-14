const obj = {};

function transform(data) {
  data.name = "JS";
  data = null;
  return data;
}

const newObj = transform(obj);
console.log({ obj, newObj }); // { obj: { name: 'JS' }, newObj: null }

/* break it down:- 
in JS objects are passed by reference. So when we pass an object to a function, it is passed by reference. so here we are passing an obj to transform function and adding the value into it.
then we are breaking the reference by setting data to null. So now data is null and it is not pointing to the original object and here data is a new variable whose value is null and we are returning that.

*/
