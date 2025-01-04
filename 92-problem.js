const obj = {};

obj[(obj["A"] = "B")] = "C";
console.log(obj); // { A: 'B', B: 'C' }

/* break the code 

Evaluate obj["A"] = "B"

This assigns the value "B" to the property "A" in the object obj.
After this step:

obj = { A: "B" };

Step 3: Use the Assignment Result as a Key
The assignment expression obj["A"] = "B" returns the value "B".
So, the expression becomes:

obj["B"] = "C";
The property key "B" is added to obj, with the value "C".
*/
