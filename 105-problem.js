const obj={name:'x'}

delete obj.name;

obj?.name='Y'; // SyntaxError bcoz we can't set property using optional chaining operator .

//* to fix 

const obj={name:'x'}

delete obj.name;

obj.name='Y';
console.log(obj)



const obj={name:'x'}

delete obj.name;
if (obj.name) {
    
    obj.name='Y';
}
console.log(obj)

//* Note :- "You shouldn’t use obj.name because if obj.name was set to false initially, the if guard will not let it go; instead, you should use 'name' in obj so it will check if the name exists on the object or not."
/*
This means:

Checking for obj.name only verifies its truthiness:

If obj.name is false, 0, '' (empty string), or null, it will evaluate as falsy and skip the if block, even though the name property exists in the object.
Using 'name' in obj checks for the property’s existence:

The 'name' in obj syntax checks whether the name property exists on the object, regardless of its value.
*/
const obj = { name: false };

// Using `if (obj.name)`
if (obj.name) {
    obj.name = 'Y';
}
console.log(obj); // Output: { name: false }
// The `if` block does not execute because `obj.name` is `false` (falsy).

// Using `if ('name' in obj)`
if ('name' in obj) {
    obj.name = 'Y';
}
console.log(obj); // Output: { name: 'Y' }
// The `if` block executes because the `name` property exists in the object.
/*
Why It Matters:
obj.name checks the value and its truthiness:
If the value is falsy (false, 0, null, undefined, or an empty string), it will skip the if block.
'name' in obj only checks for the existence of the property:
This approach is independent of the property's value. It works even if the value is falsy.
*/