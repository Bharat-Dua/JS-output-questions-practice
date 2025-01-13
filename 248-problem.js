console.log([]=="") // false

//* JS BTS conver the empty array into empty string

console.log([]==[]) // false

//* when we compare same type of data type js doesn't do type coercion BTS it just do work like strict equality

console.log([12]=[12]) // false here it's not even checking their value as well as not doing any type coercion when we have same data type LHS==RHS