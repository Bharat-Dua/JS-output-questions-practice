console.log(`${{ Object }}`); // '[Object:Object]'

//* break it down into steps
/*
{ Object } is a shorthand for creating an object with a property Object, where the key and value are the same. This is equivalent to:

{ Object: Object }

The Object here is the global Object constructor in JavaScript, which is a built-in function.

So, { Object } creates an object like this:

{
  Object: [Function: Object]
}
converting the object to a string
`${"[object Object]"}`

final
'[object Object]'

*/
