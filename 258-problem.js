const arr = ["name"];
const obj = {};

obj.name = "FrontendMaster";

obj[arr] = "React";

console.log(obj.name); // 'React'

/* 
Here is the explanation:
1. const arr = ["name"]
This creates an array `arr` with one element, the string "name"
2. const obj = {};
This initializes an empty object obj
3. obj.name ="FrontendMaster";
This sets the property 'name' of the object 'obj' to the string "FrontendMaster"
4. obj[arr] = "React"
Here, arr is an array containing the string "name", and obj[arr] is equivalent to obj["name"] because JavaScript converts the array to its string representation when used as a property key. So, this statement sets the property name of the object obj to the string "React", overwriting the previous value.
5. console.log(obj.name);
This logs the value of the property name of the object obj, which is now "React" after being overwritten in the previous step.
Therefore, the final output will be:
React
*/
