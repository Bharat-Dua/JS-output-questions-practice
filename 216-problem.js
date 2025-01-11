let isPass = false;
console.log(isPass.randomkey); // undefined

//* Because As we know primitive values doesn't have methods and properties but when we try to treat them like object then js will temporary convert them into object and if that prop is not in object we get undefined and after executing that line js will put them into garbage collector.
